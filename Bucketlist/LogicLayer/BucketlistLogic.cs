using Bucketlist.DataLayer;
using Bucketlist.ModelLayer.Entity;

namespace Bucketlist.LogicLayer
{
    public class BucketlistLogic : CoreLogic<BucketlistModel>
    {
        IService _service;
        public BucketlistLogic(IService service) : base(service)
        {
            _service = service;
        }
    }
}
