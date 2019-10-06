using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bucketlist.ModelLayer.Entity
{
    public class BucketlistItem
    {
        public int Id { get; set; }
        public string BucketlistId { get; set; }
        public string Name { get; set; }
        public DateTime Date_Created { get; set; }
        public DateTime Date_Modified { get; set; }
        public bool Done { get; set; }
    }
}
