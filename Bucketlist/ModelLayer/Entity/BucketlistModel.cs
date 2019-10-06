using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bucketlist.ModelLayer.Entity
{
    public class BucketlistModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Items { get; set; }
        public DateTime Date_Created { get; set; }
        public DateTime Date_Modified { get; set; }
        public string Created_By { get; set; }
    }
}
