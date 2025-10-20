# P100 Power Platform ALM DevContainer
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base

# Install Power Platform CLI (pac)
RUN apt-get update && \
    apt-get install -y wget unzip && \
    wget https://aka.ms/pac-linux -O pac-linux.zip && \
    unzip pac-linux.zip -d /usr/local/bin/pac && \
    chmod +x /usr/local/bin/pac/pac && \
    ln -s /usr/local/bin/pac/pac /usr/local/bin/pac && \
    rm pac-linux.zip

# Install PowerShell
RUN apt-get install -y powershell

# Install core developer tools (dotnet, git, etc.)
RUN apt-get install -y git curl

# Set default shell
SHELL ["/usr/bin/pwsh", "-c"]

WORKDIR /workspace
