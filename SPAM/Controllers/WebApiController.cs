using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPAM.Controllers
{
    public class WebApiController : ApiController{

        [HttpGet]
        public IHttpActionResult Index(string name) {
            return Ok(new { Nama = name });
        }

    }
}
