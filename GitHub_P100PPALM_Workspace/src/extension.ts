import * as vscode from "vscode";
import { register as registerPlanner } from "./commands/planner";
import { register as registerListPlannerTasks } from "./commands/listPlannerTasks";
import { register as registerReadCopilotSettings } from "./commands/readCopilotSettings";
import { AuthService } from "./auth/authService";
import { config } from "./config";
import { CopilotSettingsTreeDataProvider } from "./views/copilotSettingsTreeDataProvider";

export function activate(context: vscode.ExtensionContext) {
  // Register modular commands
  registerPlanner(context);
  registerListPlannerTasks(context);
  // Register Copilot Settings tree view and command
  const authService = new AuthService({
    clientId: config.clientId,
    tenantId: config.tenantId,
    scopes: ["https://graph.microsoft.com/.default"],
  });
  const copilotSettingsProvider = new CopilotSettingsTreeDataProvider();
  vscode.window.registerTreeDataProvider(
    "copilotSettingsView",
    copilotSettingsProvider
  );
  registerReadCopilotSettings(context, authService, copilotSettingsProvider);
}

export function deactivate() {}
