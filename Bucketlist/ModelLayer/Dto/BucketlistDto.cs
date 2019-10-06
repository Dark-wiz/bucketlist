using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bucketlist.ModelLayer
{
    public class BucketlistDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<BucketlistItemDto> Items { get; set; }
        public DateTime Date_Created { get; set; }
        public DateTime Date_Modified { get; set; }
        public string Created_By { get; set; }
    }
    public class UpdateBucketlistDto
    {
        public string Name { get; set; }
        public DateTime Date_Created { get; set; }
        public DateTime Date_Modified { get; set; }
        public string Created_By { get; set; }
    }

}
