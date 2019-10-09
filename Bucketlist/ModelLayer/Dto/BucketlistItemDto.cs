using System;
using System.Collections.Generic;

namespace Bucketlist.ModelLayer
{
    public class BucketlistItemDto
    {
        public string Name { get; set; }
        public DateTime? Date_Created { get; set; }
        public DateTime? Date_Modified { get; set; }
        public bool Done { get; set; }
    }

    public class AddBucketlistItemDto
    {
        public BucketlistItemDto ItemDtos { get; set; }
    }

    public class BucketlistViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Items { get; set; }
        public DateTime Date_Created { get; set; }
        public DateTime Date_Modified { get; set; }
        public string Created_By { get; set; }
    }
}
