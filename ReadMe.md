# P100 PowerPlatform ALM

Automation and ALM for Power Platform

## Dev Container Setup (VS Code)

This project supports development in a VS Code dev container, but not including VS Code Dev Insider (as of yet) and GitHub Copilot integration.

### Quick Start

### **Open in VS Code**

- Use the "Reopen in Container" command from the Command Palette.

### **Rebuild the Dev Container**

- If prompted, select "Rebuild Container" to ensure all dependencies are installed.

### **Verify Extensions**

- Copilot and other required extensions will be installed automatically if listed in `.devcontainer/devcontainer.json`.

- To upgrade Copilot to 4.1, open the Extensions panel and update GitHub Copilot, or specify the version in `devcontainer.json`:

````json
    "customizations": {
    "vscode": {
    "extensions": ["github.copilot@4.1.0"]
    ```

# [Build Status](https://github.com/Electric-G-Ltd/P100-PowerPlatform-ALM/actions/workflows/ci-cd.yml/badge.svg)

## Workflow Overview

### .NET CI/CD Automation

This repository uses GitHub Actions for automated build, test, and publish of the .NET solution. Every push or pull request to `main` triggers:

- Dependency restore
- Build
- Test
- Publish artifacts

See `.github/workflows/ci-cd.yml` for details.

### Power Platform Solution Management

Power Platform solutions are managed in the `/solutions` directory with comprehensive documentation and versioning.

**Current Solution:**
**Name**: P100 Electrical Agent Suite

**Version**: 1.0.0.1
**Package**: `/solutions/P100ElectricalAgentSuite/P100ElectricalAgentSuite_1_0_0_1.zip`

**Solution Management Workflow:**

1. Export solution from Power Platform environment
2. Package and version in `/solutions` directory
3. Import into target environment following the import guide
4. Validate components and document results
5. Update version and repeat for next iteration

**Documentation:**

- [Solution Packaging Guide](./solutions/docs/solution-packaging-guide.md)
- [Solution Import Guide](./solutions/docs/solution-import-guide.md)
- [Current Solution Summary](./solutions/SOLUTION_SUMMARY.md)

**Quick Import:**

```bash
# Download the solution package
# Navigate to https://make.powerapps.com/
# Solutions → Import solution → Select the .zip file
# See import guide for detailed steps
````

---

### Troubleshooting

- If the container fails to build, check for syntax errors or deprecated fields in `.devcontainer/devcontainer.json` and `Dockerfile`.
- Remove any `.devcontainer` cache folders and rebuild.
- Ensure you are using a recent base image in the Dockerfile.
- For Copilot issues, update the extension inside the container or pin the desired version.

### Environment Variables

- Add any required secrets or API keys to a `.env` file in the project root (not committed).

### Folder Structure

- `Connectors/` — Power Platform connectors and related code
- `solutions/` — Power Platform solution packages and documentation
- `.devcontainer/` — Dev container config and Dockerfile
- `docs/` — Project documentation
- `governance/` — Repository governance and contribution guidelines

---

## Build Status

[![Build Status](https://github.com/Electric-G-Ltd/P100-PowerPlatform-ALM/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Electric-G-Ltd/P100-PowerPlatform-ALM/actions/workflows/ci-cd.yml)

---

For more help, see the Issues tab or contact the project maintainers.
