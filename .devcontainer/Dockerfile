# P100 Power Platform ALM DevContainer
FROM mcr.microsoft.com/dotnet/sdk:8.0

# Install Node.js and TypeScript
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g typescript

# Install PowerShell (add Microsoft package repository then install)
RUN apt-get update && \
    apt-get install -y wget apt-transport-https gnupg ca-certificates && \
    wget -q https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O /tmp/packages-microsoft-prod.deb && \
    dpkg -i /tmp/packages-microsoft-prod.deb && \
    rm /tmp/packages-microsoft-prod.deb && \
    apt-get update && \
    apt-get install -y powershell && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /workspace
