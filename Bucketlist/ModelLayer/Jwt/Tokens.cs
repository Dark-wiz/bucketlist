using Bucketlist.ModelLayer.Entity;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Object.Jwt
{
    public class Tokens
    {
        public static jwtObject GenerateJwt( IJwtFactory jwtFactory, User user, JwtIssuerOptions jwtOptions)
        {
            jwtObject response = new jwtObject()
            {
                id = user.Id,
                expires_in = (int)jwtOptions.ValidFor.Hours
            };
            return response;
        }
    }
    public class jwtObject
    {
        public string id { get; set; }
        public string auth_token { get; set; }
        public int expires_in { get; set; }
        
    }
    
}
