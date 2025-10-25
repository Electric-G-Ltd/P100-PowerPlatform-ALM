# VS Code Extension Dependencies for Planner, Dataverse, and Graph API Development

This workspace recommends the following VS Code extensions to streamline development, testing, and debugging for Microsoft Planner, Dataverse, and Microsoft Graph API integrations.

## Essential for Extension Development

| Extension                                                                                                                         | Purpose                                | Why You Need It                         |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| [REST Client (humao.rest-client)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                          | Send HTTP requests directly in VS Code | Test Graph API calls without Postman    |
| [Thunder Client (rangav.vscode-thunder-client)](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) | Alternative REST testing               | Test authentication & Planner endpoints |
| [Graph API Postman Extension](https://marketplace.visualstudio.com/items?itemName=GraphExplorer.vscode-graph-explorer)            | Official Graph API explorer            | Explore Planner/Dataverse schemas       |

## For Dataverse Inspection

| Extension                                                                                                                                                           | Purpose                  | Why You Need It                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------- |
| [Power Platform Tools (microsoft-IsvExpTools.powerplatform-vscode)](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.powerplatform-vscode) | Dataverse table browser  | Inspect Dataverse structure, schema, data |
| [Power Apps Checker (microsoft-IsvExpTools.powerapps-checker)](https://marketplace.visualstudio.com/items?itemName=microsoft-IsvExpTools.powerapps-checker)         | Validation & diagnostics | Code quality for Power Apps integrations  |

## For Debugging & Development

| Extension                                                                                                                              | Purpose                    | Why You Need It                      |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------------------------ |
| [Debugger for Chrome (msjsdiag.debugger-for-chrome)](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) | Debug extension execution  | Step through Planner API calls       |
| [Debugger for Edge (msjsdiag.debugger-for-edge)](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-edge)       | Debug extension execution  | Step through Planner API calls       |
| [Azure Account (ms-vscode.azure-account)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account)                 | Azure authentication UI    | Manage Graph API credentials         |
| [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)                                                 | Interactive Graph API tool | Test Planner endpoints interactively |

## Productivity

| Extension                                                                                                                | Purpose                 | Why You Need It               |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ----------------------------- |
| [JSON to CSV (gencay.vscode-json-to-csv)](https://marketplace.visualstudio.com/items?itemName=gencay.vscode-json-to-csv) | Convert Graph responses | Inspect returned Planner data |

## Installation

1. Open the Command Palette (`Ctrl+Shift+P`)
2. Run `Extensions: Show Recommended Extensions`
3. Click `Install All` or install individually from the list above

Or, use the provided script:

```sh
bash setup/install-extensions.sh
```

## See Also

- `.vscode/extensions.json` for workspace recommendations
- [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
