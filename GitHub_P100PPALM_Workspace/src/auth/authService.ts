import * as vscode from "vscode";

/**
 * Interface for authentication configuration
 */
export interface AuthConfig {
  clientId: string;
  tenantId?: string;
  scopes: string[];
}

/**
 * AuthService handles OAuth 2.0 authentication with Microsoft Graph API
 * Uses VS Code's built-in authentication provider for Microsoft
 */
export class AuthService {
  private readonly config: AuthConfig;
  private readonly outputChannel: vscode.OutputChannel;
  private accessToken: string | null = null;
  private tokenExpiry: number = 0;

  /**
   * @param config - Authentication configuration
   * @param outputChannel - Optional VS Code output channel for logging
   */
  constructor(config: AuthConfig, outputChannel?: vscode.OutputChannel) {
    this.config = config;
    this.outputChannel =
      outputChannel ||
      vscode.window.createOutputChannel("P100-PowerPlatform-ALM Auth");
  }

  /**
   * Authenticates the user and returns an access token
   * Uses VS Code's authentication provider for seamless integration
   * @returns Promise<string | null> - Access token or null if authentication failed
   */
  async getAccessToken(): Promise<string | null> {
    try {
      // Check if we have a valid cached token
      if (this.accessToken && Date.now() < this.tokenExpiry) {
        return this.accessToken;
      }

      // Use VS Code's built-in Microsoft authentication provider
      const session = await vscode.authentication.getSession(
        "microsoft",
        this.config.scopes,
        { createIfNone: true }
      );

      if (session) {
        this.accessToken = session.accessToken;
        // Set expiry to 50 minutes from now (tokens typically last 1 hour)
        this.tokenExpiry = Date.now() + 50 * 60 * 1000;
        this.logInfo("Authentication successful");
        return this.accessToken;
      }

      this.logError("Failed to obtain authentication session");
      return null;
    } catch (error: any) {
      this.logError(`Authentication error: ${error.message}`);
      return null;
    }
  }

  /**
   * Signs out the user and clears cached tokens
   */
  async signOut(): Promise<void> {
    try {
      // Clear local token cache
      this.accessToken = null;
      this.tokenExpiry = 0;

      // Note: VS Code manages the authentication session lifecycle
      // Users can manually sign out through VS Code's Accounts menu if needed
      this.logInfo(
        "Local authentication cache cleared. Use VS Code's Accounts menu to fully sign out."
      );

      // Optionally show info message to user
      vscode.window.showInformationMessage(
        "Signed out from P100-PowerPlatform-ALM. Use VS Code's Accounts menu to completely sign out from Microsoft."
      );
    } catch (error: any) {
      this.logError(`Sign out error: ${error.message}`);
    }
  }

  /**
   * Checks if the user is currently authenticated
   * @returns boolean - True if authenticated with valid token
   */
  async isAuthenticated(): Promise<boolean> {
    const token = await this.getAccessToken();
    return token !== null;
  }

  /**
   * Gets the current authentication session information
   * @returns Promise<vscode.AuthenticationSession | null>
   */
  async getSession(): Promise<vscode.AuthenticationSession | null> {
    try {
      const session = await vscode.authentication.getSession(
        "microsoft",
        this.config.scopes,
        { createIfNone: false }
      );
      return session || null;
    } catch (error: any) {
      this.logError(`Failed to get session: ${error.message}`);
      return null;
    }
  }

  /**
   * Logs info messages to the output channel
   * @param message - Info message to log
   */
  private logInfo(message: string): void {
    const timestamp = new Date().toISOString();
    this.outputChannel.appendLine(`[${timestamp}] INFO: ${message}`);
  }

  /**
   * Logs error messages to the output channel
   * @param message - Error message to log
   */
  private logError(message: string): void {
    const timestamp = new Date().toISOString();
    this.outputChannel.appendLine(`[${timestamp}] ERROR: ${message}`);
    this.outputChannel.show(true);
  }
}
