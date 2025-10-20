# Install core developer tools for Power Platform ALM
# This script runs inside the devcontainer

# Install Power Platform CLI (pac)
Write-Host "Installing Power Platform CLI (pac)..."
Invoke-WebRequest -Uri "https://aka.ms/pac-linux" -OutFile "pac-linux.zip"
Expand-Archive -Path "pac-linux.zip" -DestinationPath "/usr/local/bin/pac"
Remove-Item "pac-linux.zip"

# Install .NET tools
Write-Host "Restoring .NET tools..."
dotnet tool restore

# Install additional developer tools
Write-Host "Installing additional developer tools..."
# Add any other tools here as needed

Write-Host "Core developer tools installation complete."
