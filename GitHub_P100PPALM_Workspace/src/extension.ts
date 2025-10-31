
import * as vscode from "vscode";
import { register as registerPlanner } from "./commands/planner";
import { register as registerListPlannerTasks } from "./commands/listPlannerTasks";

export function activate(context: vscode.ExtensionContext) {
  // Register modular commands
  registerPlanner(context);
  registerListPlannerTasks(context);
  // Future: import and register more commands here
}

export function deactivate() {}
