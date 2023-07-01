using MultiplexProject;
using MultiplexProject.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var services = builder.Services;

services.AddCors(c => c.AddPolicy("MyPolicy", x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
services.AddControllers();
// Configure the HTTP request pipeline.
services.AddDbContext<CodeFirstMultiplex>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("MyConn")));
services.AddScoped<IRegister,RegisterDAL>();
services.AddScoped<IMovie, MovieDAL>();
services.AddScoped<IFeedback, FeedbackDAL>();
services.AddScoped<IMultiplex, MultiplexDAL>();
services.AddScoped<IScreen, ScreenDAL>();
services.AddScoped<ITicket, TicketDAL>();
services.AddScoped<ISeatMatrix, SeatMatrixDAL>();
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidAudience = builder.Configuration["Jwt:Audience"],
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});
//DI for our interface and implementation
var app = builder.Build();
app.MapControllers();
app.UseRouting();
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseAuthentication();
app.UseAuthorization();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
       new WeatherForecast
       (
           DateTime.Now.AddDays(index),
           Random.Shared.Next(-20, 55),
           summaries[Random.Shared.Next(summaries.Length)]
       ))
        .ToArray();
    return forecast;
});

app.Run();

internal record WeatherForecast(DateTime Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}