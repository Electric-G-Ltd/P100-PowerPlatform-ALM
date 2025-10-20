namespace PowerPlatformConnector.Services
{
    public interface IAuthenticationService
    {
        Task<string> GetAccessTokenAsync(CancellationToken cancellationToken = default);
    }
}
