import * as vscode from "vscode";
import { CopilotSettingsTreeDataProvider } from "../views/copilotSettingsTreeDataProvider";
import { AuthService } from "../auth/authService";

export function register(
    context: vscode.ExtensionContext,
    authService: AuthService,
    copilotSettingsProvider: CopilotSettingsTreeDataProvider
) {
    const disposable = vscode.commands.registerCommand(
        "extension.readCopilotSettings",
        async () => {
            // Simulate reading Copilot settings (replace with real logic)
            vscode.window.showInformationMessage(
                "Copilot settings read! (Simulated)"
            );
            copilotSettingsProvider.refresh();
        }
    );
    context.subscriptions.push(disposable);
}
