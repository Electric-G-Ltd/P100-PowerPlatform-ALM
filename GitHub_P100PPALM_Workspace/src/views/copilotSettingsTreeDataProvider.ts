import * as vscode from "vscode";
import { CopilotSettings } from "../services/graphService";

/**
 * Provides a tree view for displaying Copilot settings in the VS Code sidebar.
 * Handles loading, error, and data states for a user-friendly experience.
 */
export class CopilotSettingsTreeDataProvider
  implements vscode.TreeDataProvider<CopilotSettingsTreeItem>
{
  private _onDidChangeTreeData: vscode.EventEmitter<
    CopilotSettingsTreeItem | undefined | void
  > = new vscode.EventEmitter<CopilotSettingsTreeItem | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<
    CopilotSettingsTreeItem | undefined | void
  > = this._onDidChangeTreeData.event;

  private settings: CopilotSettings | null = null;
  private loading: boolean = false;
  private error: string | null = null;

  /**
   * Refreshes the tree view with new settings or error state.
   * @param settings - Copilot settings object
   * @param error - Error message (if any)
   */
  refresh(settings?: CopilotSettings, error?: string) {
    this.settings = settings || null;
    this.error = error || null;
    this.loading = false;
    this._onDidChangeTreeData.fire();
  }

  /**
   * Sets the tree view to a loading state.
   */
  setLoading() {
    this.loading = true;
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(element: CopilotSettingsTreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(
    element?: CopilotSettingsTreeItem
  ): Thenable<CopilotSettingsTreeItem[]> {
    if (this.loading) {
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "Loading...",
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    if (this.error) {
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          this.error,
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    if (!this.settings) {
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "No settings loaded.",
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    if (!element) {
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "Copilot Settings",
          vscode.TreeItemCollapsibleState.Expanded
        ),
      ]);
    }
    if (element.label === "Copilot Settings") {
      return Promise.resolve(
        Object.keys(this.settings).map(
          (key) =>
            new CopilotSettingsTreeItem(
              key,
              vscode.TreeItemCollapsibleState.Collapsed
            )
        )
      );
    }
    if (this.settings && element.label in this.settings) {
      const value = this.settings[element.label];
      if (typeof value === "object" && value !== null) {
        return Promise.resolve(
          Object.keys(value).map(
            (subKey) =>
              new CopilotSettingsTreeItem(
                `${subKey}: ${JSON.stringify(value[subKey])}`,
                vscode.TreeItemCollapsibleState.None
              )
          )
        );
      } else {
        return Promise.resolve([
          new CopilotSettingsTreeItem(
            `${value}`,
            vscode.TreeItemCollapsibleState.None
          ),
        ]);
      }
    }
    return Promise.resolve([]);
  }
}

export class CopilotSettingsTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}
