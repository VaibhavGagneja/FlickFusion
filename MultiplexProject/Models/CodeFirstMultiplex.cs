using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiplexProject.Models
{
    public class CodeFirstMultiplex : DbContext
    {
        public CodeFirstMultiplex() : base() { }
        public CodeFirstMultiplex(DbContextOptions<CodeFirstMultiplex> options) : base(options)
        {
        }
        public DbSet<Register> Registers { get; set; }
        public DbSet<Movie> Movie { get; set; }
        public DbSet<Multiplex> Multiplex { get; set; }
        public DbSet<Screen> Screen { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<SeatMatrix> seatMatrices { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSqlLocalDB;" +
                    "Initial Catalog=DBMultiplex;Integrated Security=True;");
            }
        }
    }
}
