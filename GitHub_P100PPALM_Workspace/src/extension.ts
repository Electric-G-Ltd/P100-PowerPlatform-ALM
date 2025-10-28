import * as vscode from "vscode";
import { register as registerPlanner } from "./commands/planner";
import { register as registerListPlannerTasks } from "./commands/listPlannerTasks";
import { register as registerReadCopilotSettings } from "./commands/readCopilotSettings";
import { AuthService } from "./auth/authService";
import { CopilotSettingsTreeDataProvider } from "./views/copilotSettingsTreeDataProvider";

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
}

export function deactivate() {}
