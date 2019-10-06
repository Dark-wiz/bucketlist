using Bucketlist.DataLayer;
using Bucketlist.ModelLayer.Entity;

namespace Bucketlist.LogicLayer
{
    public class BucketlistItemLogic : CoreLogic<BucketlistItem>
    {
        readonly IService _service;
        public BucketlistItemLogic(IService service) : base(service)
        {
            _service = service;
        }
    }
}
