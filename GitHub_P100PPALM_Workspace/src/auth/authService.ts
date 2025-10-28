import * as vscode from "vscode";

/**
 * AuthService handles OAuth 2.0 authentication for Microsoft Graph API.
 * It manages token acquisition, caching, and error handling.
 */
export class AuthService {
  private accessToken: string | null = null;
  private readonly clientId = "YOUR_CLIENT_ID_HERE"; // TODO: Replace with your Azure AD app client ID
  private readonly tenantId = "common"; // Or your tenant ID
  private readonly scopes = [
    "User.Read",
    "offline_access",
    "https://graph.microsoft.com/CopilotSettings-LimitedMode.ReadWrite",
  ];

  /**
   * Acquires an access token for Microsoft Graph API.
   * Prompts the user to sign in if necessary.
   */
  async getAccessToken(): Promise<string | null> {
    if (this.accessToken) {
      return this.accessToken;
    }
    // Use VS Code's built-in authentication provider for Microsoft
    try {
      const session = await vscode.authentication.getSession(
        "microsoft",
        this.scopes,
        { createIfNone: true }
      );
      if (session && session.accessToken) {
        this.accessToken = session.accessToken;
        return this.accessToken;
      }
      vscode.window.showErrorMessage(
        "Failed to acquire Microsoft Graph token."
      );
      return null;
    } catch (err: any) {
      vscode.window.showErrorMessage(
        `Authentication error: ${err.message || err}`
      );
      return null;
    }
  }

  /**
   * Clears the cached access token (for sign-out scenarios).
   */
  clearToken() {
    this.accessToken = null;
  }
}
