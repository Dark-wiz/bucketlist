using Bucketlist.ModelLayer.Entity;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Object.Jwt
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(User user);
        ClaimsIdentity GenerateClaimsIdentity(string userName, string id);
    }
}
