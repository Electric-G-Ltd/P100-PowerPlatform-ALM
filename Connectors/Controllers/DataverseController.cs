using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PowerPlatformConnector.Services;
using PowerPlatformConnector.Models;
using System.ComponentModel.DataAnnotations;

namespace PowerPlatformConnector.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DataverseController : ControllerBase
    {
        private readonly IDataverseService _dataverseService;
        private readonly ILogger<DataverseController> _logger;

        public DataverseController(IDataverseService dataverseService, ILogger<DataverseController> logger)
        {
            _dataverseService = dataverseService;
            _logger = logger;
        }

        [HttpGet("tables")]
        [ProducesResponseType(typeof(IEnumerable<DataverseTable>), 200)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<IEnumerable<DataverseTable>>> GetAllTables()
        {
            try
            {
                var tables = await _dataverseService.GetAllTablesAsync();
                return Ok(tables);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving tables");
                return StatusCode(500, new { error = "Failed to retrieve tables", message = ex.Message });
            }
        }

        [HttpGet("tables/{tableName}")]
        [ProducesResponseType(typeof(object), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetTable(
            [FromRoute] 
            [Required]
            string tableName)
        {
            try
            {
                var table = await _dataverseService.GetTableByNameAsync(tableName);
                if (table == null)
                    return NotFound(new { error = "Table not found", tableName });
                return Ok(table);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving table {TableName}", tableName);
                return StatusCode(500, new { error = "Failed to retrieve table", message = ex.Message });
            }
        }

        [HttpGet("tables/{tableName}/columns")]
        [ProducesResponseType(typeof(object), 200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult> GetTableColumns(
            [FromRoute] 
            [Required]
            string tableName)
        {
            try
            {
                var columns = await _dataverseService.GetTableColumnsAsync(tableName);
                return Ok(columns);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving columns for table {TableName}", tableName);
                return StatusCode(500, new { error = "Failed to retrieve columns", message = ex.Message });
            }
        }

        [HttpGet("health")]
        [ProducesResponseType(typeof(object), 200)]
        public IActionResult Health()
        {
            return Ok(new { status = "healthy", timestamp = DateTime.UtcNow });
        }

        [HttpGet("debug/config")]
        [ProducesResponseType(typeof(object), 200)]
        public IActionResult DebugConfig()
        {
            var config = new
            {
                ClientIdSet = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("PPAC_CLIENT_ID")),
                ClientSecretSet = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("PPAC_CLIENT_SECRET")),
                TenantIdSet = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("PPAC_TENANT_ID")),
                EnvironmentUrlSet = !string.IsNullOrEmpty(Environment.GetEnvironmentVariable("PPAC_ENVIRONMENT_URL_DEV")),
                ClientIdLength = Environment.GetEnvironmentVariable("PPAC_CLIENT_ID")?.Length ?? 0,
                TenantIdLength = Environment.GetEnvironmentVariable("PPAC_TENANT_ID")?.Length ?? 0,
                EnvironmentUrlPrefix = Environment.GetEnvironmentVariable("PPAC_ENVIRONMENT_URL_DEV")?.Substring(0, Math.Min(20, Environment.GetEnvironmentVariable("PPAC_ENVIRONMENT_URL_DEV")?.Length ?? 0))
            };
            return Ok(config);
        }
    }
}