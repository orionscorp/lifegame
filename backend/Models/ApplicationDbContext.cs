using Microsoft.EntityFrameworkCore;
using YourProjectName.Models; // Make sure this using directive is present

namespace YourProjectName.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        // Add this DbSet for Users
        public DbSet<User> Users { get; set; }

        // You can add other DbSets here as needed
        // public DbSet<Product> Products { get; set; }
        // public DbSet<Order> Orders { get; set; }
    }
}