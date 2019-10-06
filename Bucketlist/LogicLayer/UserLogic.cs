using Bucketlist.DataLayer;
using Bucketlist.ModelLayer.Entity;

namespace Bucketlist.LogicLayer
{
    public class UserLogic : CoreLogic<User>
    {
        readonly IService Service;
        public UserLogic(IService service) : base(service)
        {
            Service = service;
        }
    }
}
