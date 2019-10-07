using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bucketlist.ModelLayer.Entity
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<BucketlistModel, BucketlistViewModel>();
            CreateMap<BucketlistViewModel, BucketlistModel>();

        }
    }
}
