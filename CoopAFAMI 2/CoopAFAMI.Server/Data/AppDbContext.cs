using Microsoft.EntityFrameworkCore;
using CoopAFAMI.Server.Models;

namespace CoopAFAMI.Server.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
