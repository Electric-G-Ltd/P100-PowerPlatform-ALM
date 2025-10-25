import * as vscode from "vscode";
import { AuthService } from "../auth/authService";
import { GraphService } from "../services/graphService";
import { CopilotSettingsTreeDataProvider } from "../views/copilotSettingsTreeDataProvider";

/**
 * Registers the command to fetch and display Copilot settings in the sidebar tree view.
 * Integrates with AuthService and GraphService for delegated authentication and API calls.
 * @param context - VS Code extension context
 * @param authService - AuthService instance for authentication
 * @param copilotSettingsProvider - Tree data provider for Copilot settings view
 */
export function register(
  context: vscode.ExtensionContext,
  authService: AuthService,
  copilotSettingsProvider: CopilotSettingsTreeDataProvider
) {
  // Create output channel for logging
  const outputChannel = vscode.window.createOutputChannel(
    "P100-PowerPlatform-ALM"
  );
  // Instantiate GraphService with auth and logging
  const graphService = new GraphService(authService, outputChannel);

  // Register the command to fetch Copilot settings
  const disposable = vscode.commands.registerCommand(
    "extension.readCopilotSettings",
    async () => {
      try {
        outputChannel.appendLine("Fetching Copilot settings...");
        copilotSettingsProvider.setLoading();
        // Fetch settings from Graph API
        const settings = await graphService.getCopilotSettings();
        outputChannel.appendLine("Copilot settings fetched successfully.");
        vscode.window.showInformationMessage(
          "Copilot settings fetched. See output channel for details."
        );
        outputChannel.appendLine(JSON.stringify(settings, null, 2));
        // Update tree view with new settings
        copilotSettingsProvider.refresh(settings);
      } catch (err: any) {
        // Show error to user and update tree view with error state
        vscode.window.showErrorMessage(
          `Error fetching Copilot settings: ${err.message}`
        );
        copilotSettingsProvider.refresh(undefined, err.message);
      }
    }
  );
  context.subscriptions.push(disposable);
}
