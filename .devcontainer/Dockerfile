# Use the official .NET 8 dev container image as base
FROM mcr.microsoft.com/devcontainers/dotnet:8.0

# Install Power Platform CLI
RUN wget -O - https://aka.ms/pac-linux-install | bash || echo "Power Platform CLI install script failed"

# [Optional] Install any other tools here

# Default command
CMD ["/bin/bash"]
