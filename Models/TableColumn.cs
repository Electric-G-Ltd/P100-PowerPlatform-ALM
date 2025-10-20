using System.Text.Json.Serialization;

namespace PowerPlatformConnector.Models
{
    public class TableColumn
    {
        [JsonPropertyName("@odata.type")]
        public string ODataType { get; set; } = string.Empty;

        [JsonPropertyName("MetadataId")]
        public string MetadataId { get; set; } = string.Empty;

        [JsonPropertyName("LogicalName")]
        public string LogicalName { get; set; } = string.Empty;

        [JsonPropertyName("DisplayName")]
        public DisplayNameValue? DisplayName { get; set; }

        [JsonPropertyName("SchemaName")]
        public string SchemaName { get; set; } = string.Empty;

        [JsonPropertyName("AttributeType")]
        public string AttributeType { get; set; } = string.Empty;

        [JsonPropertyName("IsPrimaryId")]
        public bool IsPrimaryId { get; set; }

        [JsonPropertyName("IsPrimaryName")]
        public bool IsPrimaryName { get; set; }

        [JsonPropertyName("IsValidForRead")]
        public bool IsValidForRead { get; set; }

        [JsonPropertyName("IsValidForCreate")]
        public bool IsValidForCreate { get; set; }

        [JsonPropertyName("IsValidForUpdate")]
        public bool IsValidForUpdate { get; set; }

        [JsonPropertyName("RequiredLevel")]
        public RequiredLevelValue? RequiredLevel { get; set; }
    }

    public class RequiredLevelValue
    {
        [JsonPropertyName("Value")]
        public string Value { get; set; } = string.Empty;
    }
}
