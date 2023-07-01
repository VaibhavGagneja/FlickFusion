using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/ScreenAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class ScreenAPIController : ControllerBase
    {

        readonly CodeFirstMultiplex db = null;
        readonly IScreen screen = null;

        public ScreenAPIController(CodeFirstMultiplex db, IScreen screen)
        {

            this.db = db;
            this.screen = screen;
        }
        [HttpPost]
        [Route("/api/ScreenAPI/AddScreen")]
        public bool Post([FromBody] Screen scr)
        {
            return screen.AddScreen(scr);
        }
        [HttpDelete]
        [Route("/api/ScreenAPI/DeleteScreen/{id}")]
        public bool Delete(int id)
        {
            return screen.DeleteScreen(id);
        }
        [HttpGet]
        [Route("/api/ScreenAPI/ShowAllScreen")]
        public List<CustomModel> Get()
        {
            return screen.ShowAllScreen();
        }
        [HttpGet]
        [Route("/api/ScreenAPI/GetScreenByMuxId/{id}")]
        public List<CustomModel> Get(int id)
        {
            return screen.GetScreenByMultiplexId(id);
        }
        
    }
}
