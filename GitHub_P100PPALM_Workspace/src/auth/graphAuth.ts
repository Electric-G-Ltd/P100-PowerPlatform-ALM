import { DeviceCodeCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';

export function getGraphClient(): Client {
  // DeviceCodeCredential prompts user to authenticate interactively
  const credential = new DeviceCodeCredential({
    tenantId: '<YOUR_TENANT_ID>', // TODO: Replace with config or settings
    clientId: '<YOUR_CLIENT_ID>', // TODO: Replace with config or settings
    userPromptCallback: (info) => {
      console.log(info.message);
    }
  });

  const client = Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => {
        const token = await credential.getToken('https://graph.microsoft.com/.default');
        return token?.token || '';
      }
    }
  });

  return client;
}
