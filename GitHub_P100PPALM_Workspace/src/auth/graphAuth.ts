/* global console */
import { DeviceCodeCredential } from "@azure/identity";
import { Client } from "@microsoft/microsoft-graph-client";
import { config } from "../config";

export function getGraphClient(): Client {
    // DeviceCodeCredential prompts user to authenticate interactively
    const credential = new DeviceCodeCredential({
        tenantId: config.tenantId,
        clientId: config.clientId,
        userPromptCallback: (info) => {
            console.log(info.message);
        },
    });

    const client = Client.initWithMiddleware({
        authProvider: {
            getAccessToken: async () => {
                const token = await credential.getToken(
                    "https://graph.microsoft.com/.default"
                );
                return token?.token || "";
            },
        },
    });

    return client;
}
