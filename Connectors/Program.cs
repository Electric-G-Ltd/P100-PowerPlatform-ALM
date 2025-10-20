using PowerPlatformConnector.Configuration;
using PowerPlatformConnector.Services;

var builder = WebApplication.CreateBuilder(args);

// Add configuration from environment variables
builder.Configuration.AddEnvironmentVariables();

// Configure Dataverse settings
builder.Services.Configure<DataverseConfig>(config =>
{
    config.ClientId = Environment.GetEnvironmentVariable("PPAC_CLIENT_ID") ?? "";
    config.ClientSecret = Environment.GetEnvironmentVariable("PPAC_CLIENT_SECRET") ?? "";
    config.TenantId = Environment.GetEnvironmentVariable("PPAC_TENANT_ID") ?? "";
    config.EnvironmentUrl = Environment.GetEnvironmentVariable("PPAC_ENVIRONMENT_URL_DEV") ?? "";
});

// Add services to the container
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Dataverse Custom Connector API", Version = "v1" });
});

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("PowerPlatform", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Register HTTP clients and services
builder.Services.AddHttpClient<IAuthenticationService, AuthenticationService>();
builder.Services.AddHttpClient<IDataverseService, DataverseService>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<IDataverseService, DataverseService>();

var app = builder.Build();

// Configure the HTTP request pipeline
// Enable Swagger in all environments for API testing
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Dataverse Custom Connector API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors("PowerPlatform");
app.UseAuthorization();
app.MapControllers();

// Root endpoint
app.MapGet("/", () => "Dataverse Custom Connector API is running! Visit /swagger for API documentation.");

app.Run();
