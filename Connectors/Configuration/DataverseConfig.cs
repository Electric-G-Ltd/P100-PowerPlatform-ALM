using System.ComponentModel.DataAnnotations;

namespace PowerPlatformConnector.Configuration
{
    public class DataverseConfig
    {
        public const string SectionName = "Dataverse";

        [Required]
        public string ClientId { get; set; } = string.Empty;

        [Required]
        public string ClientSecret { get; set; } = string.Empty;

        [Required]
        public string TenantId { get; set; } = string.Empty;

        [Required]
        public string EnvironmentUrl { get; set; } = string.Empty;

        public string Authority => $"https://login.microsoftonline.com/{TenantId}";
        public string Resource => EnvironmentUrl;
    }
}
