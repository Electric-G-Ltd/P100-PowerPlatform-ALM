import { AuthService } from "../auth/authService";
import * as vscode from "vscode";

/**
 * TypeScript interface for Copilot settings returned by the Graph API.
 * Extend this interface as you learn the schema.
 */
export interface CopilotSettings {
  // Example: theme: string;
  // Example: notificationsEnabled: boolean;
  [key: string]: any;
}

/**
 * GraphService provides methods to interact with Microsoft Graph API using delegated authentication.
 * Handles token acquisition, error handling, and logging.
 */
export class GraphService {
  private authService: AuthService;
  private outputChannel: vscode.OutputChannel;

  /**
   * @param authService - Instance of AuthService for delegated authentication
   * @param outputChannel - Optional VS Code output channel for logging
   */
  constructor(authService: AuthService, outputChannel?: vscode.OutputChannel) {
    this.authService = authService;
    this.outputChannel =
      outputChannel ||
      vscode.window.createOutputChannel("P100-PowerPlatform-ALM");
  }

  /**
   * Fetches Copilot settings from Microsoft Graph API using delegated authentication.
   * Handles token expiry, network timeouts, API errors, and malformed responses.
   * @returns CopilotSettings object or throws error
   * @throws Error with user-friendly message for all failure scenarios
   */
  async getCopilotSettings(): Promise<CopilotSettings> {
    // Acquire access token
    const token = await this.authService.getAccessToken();
    if (!token) {
      this.logError("Authentication failed. Please authenticate first.");
      throw new Error("Authentication failed. Please authenticate first.");
    }
    try {
      // Set up a 30s timeout for the fetch request
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000);
      let response: Response;
      try {
        response = await fetch(
          "https://graph.microsoft.com/v1.0/me/settings/copilotSettings",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            signal: controller.signal,
          }
        );
      } catch (err: any) {
        if (err.name === "AbortError") {
          this.logError("Request timed out. Please try again.");
          throw new Error("Request timed out. Please try again.");
        }
        this.logError(`Network error: ${err.message}`);
        throw new Error("Network error. Check your internet connection.");
      } finally {
        clearTimeout(timeout);
      }
      // Handle API-specific errors
      if (!response.ok) {
        let userMessage = `Graph API error: ${response.status}`;
        switch (response.status) {
          case 403:
            userMessage =
              "Access denied. Insufficient permissions for CopilotSettings-LimitedMode.ReadWrite.";
            break;
          case 404:
            userMessage = "Settings endpoint not available.";
            break;
          case 429:
            userMessage = "Rate limited. Please wait before trying again.";
            break;
          default:
            if (response.status >= 500) {
              userMessage = "Server error. Please try again later.";
            }
        }
        const errorText = await response.text();
        this.logError(
          `Graph API error: ${response.status} ${response.statusText} - ${errorText}`
        );
        throw new Error(userMessage);
      }
      // Parse JSON response
      let data: any;
      try {
        data = await response.json();
      } catch (err: any) {
        this.logError("Invalid response from server.");
        throw new Error("Invalid response from server.");
      }
      return data as CopilotSettings;
    }
  }

  /**
   * Logs error messages to the VS Code output channel with a timestamp.
   * @param message - Error message to log
   */
  private logError(message: string) {
    const timestamp = new Date().toISOString();
    this.outputChannel.appendLine(`[${timestamp}] ERROR: ${message}`);
    this.outputChannel.show(true);
  }
}
