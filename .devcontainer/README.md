Dev Container for P100 PowerPlatform ALM

This devcontainer is Linux-based and configured to match the non-Insiders setup.

What happens on first open
- The container image is built from the `Dockerfile` in this folder.
- `postCreateCommand` will check for TypeScript and dotnet, install Node dependencies for the extension located in `GitHub_P100PPALM_Workspace/src` if a lockfile is present, and run `dotnet restore`.

Opening from VS Code or VS Code Insiders
1. Install the "Dev Containers" extension in the client you want to use (stable or Insiders).
2. Open this repository folder.
3. Command Palette -> "Dev Containers: Reopen in Container".

SSH / Git credentials
- If you need host SSH keys inside the container, prefer SSH agent forwarding. Do not commit private keys into the repository.

Private feeds
- If you use private NuGet or npm registries, set up credentials (environment variables or mounts) before opening the container.
