using System.Text.Json.Serialization;

namespace PowerPlatformConnector.Models
{
    public class DataverseTable
    {
        [JsonPropertyName("@odata.type")]
        public string ODataType { get; set; } = string.Empty;

        [JsonPropertyName("MetadataId")]
        public string MetadataId { get; set; } = string.Empty;

        [JsonPropertyName("LogicalName")]
        public string LogicalName { get; set; } = string.Empty;

        [JsonPropertyName("DisplayName")]
        public DisplayNameValue? DisplayName { get; set; }

        [JsonPropertyName("Description")]
        public DisplayNameValue? Description { get; set; }

        [JsonPropertyName("SchemaName")]
        public string SchemaName { get; set; } = string.Empty;

        [JsonPropertyName("EntitySetName")]
        public string EntitySetName { get; set; } = string.Empty;

        [JsonPropertyName("IsCustomEntity")]
        public bool IsCustomEntity { get; set; }

        [JsonPropertyName("OwnershipType")]
        public string OwnershipType { get; set; } = string.Empty;
    }

    public class DisplayNameValue
    {
        [JsonPropertyName("UserLocalizedLabel")]
        public LocalizedLabel? UserLocalizedLabel { get; set; }
    }

    public class LocalizedLabel
    {
        [JsonPropertyName("Label")]
        public string Label { get; set; } = string.Empty;

        [JsonPropertyName("LanguageCode")]
        public int LanguageCode { get; set; }
    }
}
