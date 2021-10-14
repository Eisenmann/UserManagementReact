using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using TestReactProject001.Models;


namespace TestReactProject001
{
    public class APIContext : DbContext
    {
        public DbSet<Users> Users {get;set;}
        public APIContext(DbContextOptions<APIContext> options) : base(options)
        { }
    }
}
