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

  /**
   * Returns the tree item for the given element.
   * @param element - Tree item element
   */
  getTreeItem(element: CopilotSettingsTreeItem): vscode.TreeItem {
    return element;
  }

  /**
   * Returns the children for the given element in the tree.
   * Handles loading, error, root, and property/leaf nodes.
   * @param element - Parent tree item (optional)
   */
  getChildren(
    element?: CopilotSettingsTreeItem
  ): Thenable<CopilotSettingsTreeItem[]> {
    if (this.loading) {
      // Show loading indicator
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "Loading...",
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    if (this.error) {
      // Show error message
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          this.error,
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    if (!this.settings) {
      // Show empty state
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "No settings loaded.",
          vscode.TreeItemCollapsibleState.None
        ),
      ]);
    }
    // Root node: Copilot Settings
    if (!element) {
      return Promise.resolve([
        new CopilotSettingsTreeItem(
          "Copilot Settings",
          vscode.TreeItemCollapsibleState.Expanded
        ),
      ]);
    }
    // Child nodes: settings properties
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
    // Leaf nodes: setting values
    if (this.settings && element.label in this.settings) {
      const value = this.settings[element.label];
      if (typeof value === "object" && value !== null) {
        // Expand object properties as sub-items
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
        // Show primitive value as leaf
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

/**
 * Tree item for Copilot settings tree view.
 */
export class CopilotSettingsTreeItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
  }
}
