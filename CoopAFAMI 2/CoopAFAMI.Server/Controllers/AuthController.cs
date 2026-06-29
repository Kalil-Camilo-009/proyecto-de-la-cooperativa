using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CoopAFAMI.Server.Data;
using CoopAFAMI.Server.Models;
using System.Threading.Tasks;

namespace CoopAFAMI.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController(AppDbContext context) : ControllerBase
    {
        // Modelo de petición de Login
        public class LoginRequest
        {
            public string Username { get; set; } = string.Empty;
            public string Password { get; set; } = string.Empty;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest(new { message = "El usuario y la contraseña son requeridos." });
            }

            try
            {
                System.Console.WriteLine($"[Auth] Intentando iniciar sesión para el usuario: {request.Username}");

                // Buscar el usuario de forma compatible con la traducción de EF Core a SQL
                var user = await context.Usuarios
                    .FirstOrDefaultAsync(u => u.Username.ToLower() == request.Username.ToLower() && u.Activo);

                if (user == null)
                {
                    System.Console.WriteLine($"[Auth] Usuario '{request.Username}' no encontrado o inactivo.");
                    return Unauthorized(new { message = "Usuario o contraseña incorrectos." });
                }

                // Validación de contraseña en texto plano
                bool isValidPassword = user.PasswordHash == request.Password;

                if (!isValidPassword)
                {
                    System.Console.WriteLine($"[Auth] Contraseña incorrecta para el usuario: {request.Username}");
                    return Unauthorized(new { message = "Usuario o contraseña incorrectos." });
                }

                System.Console.WriteLine($"[Auth] Inicio de sesión exitoso para: {user.Nombre}");

                // Retornar información del usuario
                return Ok(new
                {
                    nombre = user.Nombre,
                    usuario = user.Username,
                    rol = user.Rol
                });
            }
            catch (System.Exception ex)
            {
                System.Console.WriteLine($"[Auth ERROR] Error en el proceso de Login: {ex.Message}");
                System.Console.WriteLine(ex.StackTrace);
                return StatusCode(500, new { message = $"Error interno en el servidor de base de datos: {ex.Message}" });
            }
        }
    }
}
