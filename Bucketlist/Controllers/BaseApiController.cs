using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bucketlist.Controllers
{
    public abstract class BaseAPIController : Controller
    {
        [NonAction]

        public OkObjectResult Ok(object value, int status = 0, string message = "", bool isSuccessful = false)
        {
            return base.Ok(new
            {
                Status = status,
                IsSuccessful = isSuccessful,
                Message = message,
                Data = value
            });
        }

        [NonAction]
        public BadRequestObjectResult BadRequest(object value, int status = 0, string message = "", bool isSuccessful = false)
        {
            return base.BadRequest(new
            {
                Status = status,
                IsSuccessful = isSuccessful,
                Message = message,
                Data = value
            });
        }
    }
}
