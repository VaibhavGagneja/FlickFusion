using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MultiplexProjectApi.Manager;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/token")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;


        public TokenController(IConfiguration config)
        {
            _configuration = config;

        }

        [HttpPost("login")]
        public IActionResult Login([FromBody]AppUser _userData)
        {
            IActionResult response = Unauthorized();
            if (_userData != null && _userData.Email != null && _userData.Password != null)
            {
                var user = GetUser(_userData.Email, _userData.Password);

                if (user != null)
                {
                    //create claims details based on the user information
                    var token = GenerateJwtToken(_userData.Email);
                    return Ok(token);
                }

                
            }
               return response;
            
        }

        private async Task<AppUser> GetUser(string email, string password)
        {
            List<AppUser> userList = new List<AppUser>{
        new AppUser { Email = "super@jwt.com", Password = "abc@123" },
        new AppUser { Email = "ceo@jwt.com", Password = "ceo@123" }
            };

            return await Task.Run(() => userList.FirstOrDefault(u => u.Email == email && u.Password == password));
        }

        private string GenerateJwtToken(string username)
        {
            var issuer = _configuration["Jwt:Issuer"];
            var audience = _configuration["Jwt:Audience"];
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha512Signature
            );

            var subject = new ClaimsIdentity(new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Email, username),
            });

            var expires = DateTime.UtcNow.AddMinutes(10);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = subject,
                Expires = expires,
                Issuer = issuer,
                Audience = audience,
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var jwtToken = tokenHandler.WriteToken(token);

            return jwtToken;
        }
        [Authorize]
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            // Clear authentication cookie
            Response.Cookies.Delete("YourAuthenticationCookieName"); // Replace with the actual name of your authentication cookie

            // Perform any additional logout operations if needed

            return Ok();
        }

    }
}