using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bucketlist.Common;
using Bucketlist.DataLayer;
using Bucketlist.LogicLayer;
using Bucketlist.ModelLayer;
using Bucketlist.ModelLayer.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bucketlist.Controllers
{
    //[Authorize]
    [Route("bucketlists")]
    public class BucketlistController : BaseAPIController
    {
        readonly IService _Service;
        readonly BucketlistLogic _BucketlistLogic;
        readonly BucketlistItemLogic _BucketlistItemLogic;
        IMapper Mapper;
        IPaginatedResultService PaginatedResultService;

        public BucketlistController(IService Service, BucketlistLogic BucketlistLogic, BucketlistItemLogic BucketlistItemLogic, IMapper mapper, IPaginatedResultService paginatedResultService)
        {
            _Service = Service;
            _BucketlistLogic = BucketlistLogic;
            _BucketlistItemLogic = BucketlistItemLogic;
            Mapper = mapper;
            PaginatedResultService = paginatedResultService;
        }
        //complete list
        [HttpGet("")]
        public IActionResult Get()
        {
            List<BucketlistModel> bucketlists = _BucketlistLogic.GetAllEntities();
            return Ok(bucketlists, (int)Enums.StatusCode.Success, "All bucket lists", true);
        }

        //single list
        [HttpGet("{id}")]
        public IActionResult GetListById(string id, string username)
        {
            BucketlistModel item = _BucketlistLogic.GetEntityBy(p => p.Id.ToString() == id && p.Created_By == username);
            if (item != null)
            {
                return Ok(item, (int)Enums.StatusCode.Success, "single bucket item", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error);
        }

        //handle pagination
        [AllowAnonymous]
        [HttpGet("{page}/{limit}")]
        public IActionResult GetDataInPages(int page, int limit)
        {
            IEnumerable<BucketlistModel> bucketlists = _BucketlistLogic.GetAllEntities();
            var list = PaginatedResultService.PaginateRecords<BucketlistViewModel,BucketlistModel>(page, limit, bucketlists);
            return Ok(list, (int)Enums.StatusCode.Success, "All bucket lists", true);

        }

        [HttpGet("search/{name}")]
        public IActionResult GetListByName(string name)
        {
            BucketlistModel item = _BucketlistLogic.GetEntityBy(p=>p.Name == name);
            if (item != null)
            {
                return Ok(item, (int)Enums.StatusCode.Success, "single bucket item", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error);
        }

        // add list
        [HttpPost("")]
        public void Post([FromBody]BucketlistDto dto)
        {
            if (dto.Items != null)
            {
                BucketlistModel bucketlistModel = new BucketlistModel
                {
                    Created_By = dto.Created_By,
                    Date_Created = dto.Date_Created,
                    Date_Modified = dto.Date_Modified,
                    Items = dto.Items == null ? "Item not set" : "item set",
                    Name = dto.Name
                };
                _Service.Add(bucketlistModel);

                AddBucketlistItem(dto, bucketlistModel.Id.ToString());
            }
        }
        [NonAction]
        public IActionResult AddBucketlistItem(BucketlistDto dto, string bucketId)
        {
            foreach (var item in dto.Items)
            {
                BucketlistItem bucketlistItem = new BucketlistItem
                {
                    Date_Created = item.Date_Created,
                    Date_Modified = item.Date_Modified,
                    Done = item.Done,
                    Name = item.Name,
                    BucketlistId = bucketId
                };
                _Service.Add(bucketlistItem);
            }
            _Service.Save();

            return Ok("Added Successfully", isSuccessful: true);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBucketlist([FromBody] UpdateBucketlistDto dto, string id)
        {
            BucketlistModel bucketItem = _BucketlistLogic.GetEntityBy(p => p.Id.ToString() == id);
            if (bucketItem != null)
            {
                bucketItem.Created_By = dto.Created_By;
                bucketItem.Date_Created = dto.Date_Created;
                bucketItem.Date_Modified = dto.Date_Modified;
                bucketItem.Name = dto.Name;
                _Service.Save();
                return Ok("Updated successfully", isSuccessful: true, status: (int)Enums.StatusCode.Success);
            }
            return BadRequest("Update failed");
        }


        [HttpPost("{id}/items")]
        public IActionResult AddBucklistItem([FromBody]AddBucketlistItemDto items, string id)
        {
            BucketlistModel bucketItem = _BucketlistLogic.GetEntityBy(p => p.Id.ToString() == id);
            if (bucketItem != null)
            {
                foreach (var item in items.ItemDtos)
                {
                    BucketlistItem bucketlistItem = new BucketlistItem
                    {
                        Date_Created = item.Date_Created,
                        Date_Modified = item.Date_Modified,
                        Done = item.Done,
                        Name = item.Name,
                        BucketlistId = bucketItem.Id.ToString()
                    };
                    _Service.Add(bucketlistItem);
                }
                _Service.Save();
                return Ok(items, (int)Enums.StatusCode.Success);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error);
        }



        [HttpDelete("{id}")]
        public IActionResult DeleteBucketList(string id)
        {
            BucketlistModel bucketItem = _BucketlistLogic.GetEntityBy(p => p.Id.ToString() == id);
            if (bucketItem != null)
            {
                _BucketlistLogic.Delete(bucketItem);
                _Service.Save();
                return Ok(null,(int)Enums.StatusCode.Success, "deleted successfully", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error, "couldn't delete");
        }

        [HttpGet("id/items")]
        public IActionResult GetItemsInList(string id)
        {
            List<BucketlistItem> items = _BucketlistItemLogic.GetEntitiesBy(p => p.BucketlistId.ToString() == id);
            return Ok(items, (int)Enums.StatusCode.Success, "All bucket lists items", true);
        }



        //item inside bucketlist
        [HttpGet("{id}/items/{item_id}")]
        public IActionResult GetSingleItemInList(string id, int item_id)
        {
            BucketlistItem item = _BucketlistItemLogic.GetEntityBy(p => p.BucketlistId == id && p.Id == item_id);

            if (item != null)
            {
                return Ok(item, (int)Enums.StatusCode.Success, "single bucket item", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error);

        }

        [HttpPut("{id}/items/{item_id}")]
        public IActionResult UpdateSingleItemInList(string id, int item_id, [FromBody]BucketlistItemDto dto)
        {
            BucketlistItem item = _BucketlistItemLogic.GetEntityBy(p => p.BucketlistId == id && p.Id == item_id);

            if (item != null)
            {
                item.Date_Created = dto.Date_Created;
                item.Date_Modified = dto.Date_Modified;
                item.Done = dto.Done;
                item.Name = dto.Name;
                _Service.Save();
                return Ok(item, (int)Enums.StatusCode.Success, "updated single bucket item", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error, "not found");
        }

        [HttpDelete("{id}/items/{item_id}")]
        public IActionResult DeleteSIngleItem(string id, int item_id)
        {
            BucketlistItem item = _BucketlistItemLogic.GetEntityBy(p => p.BucketlistId == id && p.Id == item_id);

            if (item != null)
            {
                _BucketlistItemLogic.Delete(item);
                _Service.Save();
                return Ok(null, (int)Enums.StatusCode.Success, "deleted successfully", true);
            }
            return BadRequest(null, (int)Enums.StatusCode.Error, "couldn't delete");
        }

    }
}
