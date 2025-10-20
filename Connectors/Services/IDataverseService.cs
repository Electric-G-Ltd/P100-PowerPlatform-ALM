using PowerPlatformConnector.Models;

namespace PowerPlatformConnector.Services
{
    public interface IDataverseService
    {
        Task<IEnumerable<DataverseTable>> GetAllTablesAsync(CancellationToken cancellationToken = default);
        Task<IEnumerable<TableColumn>> GetTableColumnsAsync(string tableName, CancellationToken cancellationToken = default);
        Task<DataverseTable?> GetTableByNameAsync(string tableName, CancellationToken cancellationToken = default);
        Task<object> ExecuteQueryAsync(string entitySetName, string? filter = null, string? select = null, int? top = null, CancellationToken cancellationToken = default);
    }
}
