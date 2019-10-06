using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bucketlist.ModelLayer.Entity
{
    public class ApplicationDbContext: IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<BucketlistModel> BucketlistModel { get; set; }
        public DbSet<BucketlistItem> BucketlistItem  { get; set; }
    }
}
