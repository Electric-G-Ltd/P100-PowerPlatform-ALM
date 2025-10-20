using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using PowerPlatformConnector.Configuration;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PowerPlatformConnector.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly DataverseConfig _config;
        private readonly HttpClient _httpClient;
        private readonly ILogger<AuthenticationService> _logger;
        private string? _cachedToken;
        private DateTime _tokenExpiry = DateTime.MinValue;

        public AuthenticationService(
            IOptions<DataverseConfig> config,
            HttpClient httpClient,
            ILogger<AuthenticationService> logger)
        {
            _config = config.Value;
            _httpClient = httpClient;
            _logger = logger;
        }

        public async Task<string> GetAccessTokenAsync(CancellationToken cancellationToken = default)
        {
            // Return cached token if still valid (with 5-minute buffer)
            if (!string.IsNullOrEmpty(_cachedToken) && DateTime.UtcNow < _tokenExpiry.AddMinutes(-5))
            {
                return _cachedToken;
            }

            try
            {
                _logger.LogInformation("Requesting new access token from Azure AD");

                var tokenEndpoint = $"{_config.Authority}/oauth2/v2.0/token";
                var parameters = new Dictionary<string, string>
                {
                    ["grant_type"] = "client_credentials",
                    ["client_id"] = _config.ClientId,
                    ["client_secret"] = _config.ClientSecret,
                    ["scope"] = $"{_config.EnvironmentUrl}/.default"
                };

                var content = new FormUrlEncodedContent(parameters);
                var response = await _httpClient.PostAsync(tokenEndpoint, content, cancellationToken);

                if (!response.IsSuccessStatusCode)
                {
                    var errorContent = await response.Content.ReadAsStringAsync(cancellationToken);
                    _logger.LogError("Failed to obtain access token. Status: {StatusCode}, Content: {Content}",
                        response.StatusCode, errorContent);
                    throw new InvalidOperationException($"Failed to obtain access token: {response.StatusCode}");
                }

                var responseContent = await response.Content.ReadAsStringAsync(cancellationToken);
                var tokenResponse = JsonSerializer.Deserialize<TokenResponse>(responseContent);

                if (tokenResponse?.AccessToken == null)
                {
                    throw new InvalidOperationException("Access token not found in response");
                }

                _cachedToken = tokenResponse.AccessToken;
                _tokenExpiry = DateTime.UtcNow.AddSeconds(tokenResponse.ExpiresIn);

                _logger.LogInformation("Successfully obtained access token, expires at {Expiry}", _tokenExpiry);

                return _cachedToken;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error obtaining access token");
                throw;
            }
        }

        private class TokenResponse
        {
            [JsonPropertyName("access_token")]
            public string AccessToken { get; set; } = string.Empty;

            [JsonPropertyName("expires_in")]
            public int ExpiresIn { get; set; }

            [JsonPropertyName("token_type")]
            public string TokenType { get; set; } = string.Empty;
        }
    }
}
