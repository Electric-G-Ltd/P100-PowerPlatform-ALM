import * as vscode from "vscode";
import { register as registerPlanner } from "./commands/planner";
import { register as registerListPlannerTasks } from "./commands/listPlannerTasks";
import { register as registerReadCopilotSettings } from "./commands/readCopilotSettings";
import { AuthService } from "./auth/authService";
import { CopilotSettingsTreeDataProvider } from "./views/copilotSettingsTreeDataProvider";
import { config } from "./config";

export function activate(context: vscode.ExtensionContext) {
    // Register modular commands
    registerPlanner(context);
    registerListPlannerTasks(context);

    // Register Copilot Settings tree view and command
    const authService = new AuthService();
    const copilotSettingsProvider = new CopilotSettingsTreeDataProvider();
    vscode.window.registerTreeDataProvider(
        "copilotSettingsView",
        copilotSettingsProvider
    );
    registerReadCopilotSettings(context, authService, copilotSettingsProvider);

    // Register settings edit commands
    context.subscriptions.push(
        vscode.commands.registerCommand("extension.editTenantId", async () => {
            const value = await vscode.window.showInputBox({
                prompt: "Enter Tenant ID",
                value: config.tenantId,
            });
            if (value !== undefined) {
                config.tenantId = value;
                copilotSettingsProvider.refresh();
            }
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("extension.editClientId", async () => {
            const value = await vscode.window.showInputBox({
                prompt: "Enter Client ID",
                value: config.clientId,
            });
            if (value !== undefined) {
                config.clientId = value;
                copilotSettingsProvider.refresh();
            }
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand(
            "extension.editClientSecret",
            async () => {
                const value = await vscode.window.showInputBox({
                    prompt: "Enter Client Secret",
                    password: true,
                });
                if (value !== undefined) {
                    config.clientSecret = value;
                    copilotSettingsProvider.refresh();
                }
            }
        )
    );
}

export function deactivate() {}
