using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using PowerPlatformConnector.Configuration;
using PowerPlatformConnector.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Web;

namespace PowerPlatformConnector.Services
{
    public class DataverseService : IDataverseService
    {
        private readonly DataverseConfig _config;
        private readonly IAuthenticationService _authService;
        private readonly HttpClient _httpClient;
        private readonly ILogger<DataverseService> _logger;

        public DataverseService(
            IOptions<DataverseConfig> config,
            IAuthenticationService authService,
            HttpClient httpClient,
            ILogger<DataverseService> logger)
        {
            _config = config.Value;
            _authService = authService;
            _httpClient = httpClient;
            _logger = logger;
        }

        public async Task<IEnumerable<DataverseTable>> GetAllTablesAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                _logger.LogInformation("Retrieving all Dataverse tables");
                var token = await _authService.GetAccessTokenAsync(cancellationToken);
                var apiUrl = $"{_config.EnvironmentUrl}/api/data/v9.2/EntityDefinitions";

                var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
                request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                request.Headers.Add("OData-MaxVersion", "4.0");
                request.Headers.Add("OData-Version", "4.0");

                var response = await _httpClient.SendAsync(request, cancellationToken);
                if (!response.IsSuccessStatusCode)
                {
                    var errorContent = await response.Content.ReadAsStringAsync(cancellationToken);
                    _logger.LogError("Failed to retrieve tables. Status: {StatusCode}, Content: {Content}",
                        response.StatusCode, errorContent);
                    throw new InvalidOperationException($"Failed to retrieve tables: {response.StatusCode}");
                }

                var responseContent = await response.Content.ReadAsStringAsync(cancellationToken);
                var result = JsonSerializer.Deserialize<ODataResponse<DataverseTable>>(responseContent);
                return result?.Value ?? Enumerable.Empty<DataverseTable>();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving Dataverse tables");
                throw;
            }
        }

        public async Task<IEnumerable<TableColumn>> GetTableColumnsAsync(string tableName, CancellationToken cancellationToken = default)
        {
            try
            {
                _logger.LogInformation("Retrieving columns for table: {TableName}", tableName);
                var token = await _authService.GetAccessTokenAsync(cancellationToken);
                var apiUrl = $"{_config.EnvironmentUrl}/api/data/v9.2/EntityDefinitions(LogicalName='{tableName}')/Attributes";

                var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
                request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
                request.Headers.Add("OData-MaxVersion", "4.0");
                request.Headers.Add("OData-Version", "4.0");

                var response = await _httpClient.SendAsync(request, cancellationToken);
                if (!response.IsSuccessStatusCode)
                {
                    var errorContent = await response.Content.ReadAsStringAsync(cancellationToken);
                    throw new InvalidOperationException($"Failed to retrieve columns for table {tableName}: {response.StatusCode}");
                }

                var responseContent = await response.Content.ReadAsStringAsync(cancellationToken);
                var result = JsonSerializer.Deserialize<ODataResponse<TableColumn>>(responseContent);
                return result?.Value ?? Enumerable.Empty<TableColumn>();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving columns for table {TableName}", tableName);
                throw;
            }
        }

        public async Task<DataverseTable?> GetTableByNameAsync(string tableName, CancellationToken cancellationToken = default)
        {
            var token = await _authService.GetAccessTokenAsync(cancellationToken);
            var apiUrl = $"{_config.EnvironmentUrl}/api/data/v9.2/EntityDefinitions(LogicalName='{tableName}')";

            var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var response = await _httpClient.SendAsync(request, cancellationToken);
            if (!response.IsSuccessStatusCode) return null;

            var responseContent = await response.Content.ReadAsStringAsync(cancellationToken);
            return JsonSerializer.Deserialize<DataverseTable>(responseContent);
        }

        public async Task<object> ExecuteQueryAsync(string entitySetName, string? filter = null, string? select = null, int? top = null, CancellationToken cancellationToken = default)
        {
            var token = await _authService.GetAccessTokenAsync(cancellationToken);
            var queryBuilder = new List<string>();

            if (!string.IsNullOrWhiteSpace(filter))
                queryBuilder.Add($"$filter={HttpUtility.UrlEncode(filter)}");
            if (!string.IsNullOrWhiteSpace(select))
                queryBuilder.Add($"$select={HttpUtility.UrlEncode(select)}");
            if (top.HasValue)
                queryBuilder.Add($"$top={top.Value}");

            var queryString = queryBuilder.Any() ? "?" + string.Join("&", queryBuilder) : string.Empty;
            var apiUrl = $"{_config.EnvironmentUrl}/api/data/v9.2/{entitySetName}{queryString}";

            var request = new HttpRequestMessage(HttpMethod.Get, apiUrl);
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var response = await _httpClient.SendAsync(request, cancellationToken);
            var responseContent = await response.Content.ReadAsStringAsync(cancellationToken);
            return JsonSerializer.Deserialize<object>(responseContent) ?? new object();
        }

        private class ODataResponse<T>
        {
            [JsonPropertyName("value")]
            public List<T> Value { get; set; } = new();
        }
    }
}
