using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/MultiplexAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class MultiplexAPIController : ControllerBase
    {
        readonly CodeFirstMultiplex db = null;
        readonly IMultiplex multiplex = null;

        public MultiplexAPIController(CodeFirstMultiplex db, IMultiplex multiplex)
        {

            this.db = db;
            this.multiplex = multiplex;
        }
        [HttpPost]
        [Route("/api/MultiplexAPI/AddMultiplex")]
        public bool Post([FromBody] Multiplex multi)
        {
            return multiplex.AddMultiplex(multi);
        }
        [HttpDelete]
        [Route("/api/MultiplexAPI/DeleteMultiplex/{id}")]
        public bool Delete(int id)
        {
            return multiplex.DeleteMultiplex(id);
        }
        [HttpGet]
        [Route("/api/MultiplexAPI/ShowAllMultiplex")]
        public List<Multiplex> Get()
        {
            return multiplex.ShowAllMultiplex();
        }
    }
}
