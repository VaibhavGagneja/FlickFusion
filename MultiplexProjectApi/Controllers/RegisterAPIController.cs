using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/RegisterAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class RegisterAPIController : ControllerBase
    {
        readonly CodeFirstMultiplex db = null;
        readonly IRegister cust = null;

        public RegisterAPIController(CodeFirstMultiplex db, IRegister cust)
        {

            this.db = db;
            this.cust = cust;
        }
        [Authorize]
        [HttpPost]
        [Consumes("application/json")]
        [Route("/api/RegisterAPI/InsertUser")]
        public string Post([FromBody] Register c)
        {
            return cust.RegisterCustomer(c);
        }
        [HttpGet]
        [Route("/api/RegsiterAPI/GetUserByMobNo/{mobno}")]
        public Register Get(long mobno)
        {
            return cust.GetUserByMobNo(mobno);
        }
        [HttpGet]
        [Route("/api/RegisterAPI/Login/{mobno}/{pwd}")]

        public string Get(long mobno, string pwd)
        {
            return cust.Login(mobno, pwd);
        }
        [HttpPut]
        [Route("/api/RegisterAPI/ForgotPassword/{mobno}")]
        public string Put(long mobno)
        {
            return cust.ForgotPassword(mobno);
        }
        [HttpPut]
        [Route("/api/RegisterAPI/ChangePassword/{mobno}/{oldpassword}/{newpassword}")]
        public string Put(long mobno, string oldpassword, string newpassword)
        {
            return cust.ChangePassword(mobno,oldpassword,newpassword);
        }
    }
}
