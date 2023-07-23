using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/FeedbackAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    [Authorize]

    public class FeedbackAPIController : ControllerBase
    {
        readonly CodeFirstMultiplex db = null;
        readonly IFeedback feedback = null;

        public FeedbackAPIController(CodeFirstMultiplex db, IFeedback feedback)
        {

            this.db = db;
            this.feedback = feedback;
        }
        [HttpPost]
        [Route("/api/FeedbackAPI/AddFeedback")]
        public bool Post([FromBody] Feedback f)
        {
            return feedback.AddFeedback(f);
        }
        [HttpDelete]
        [Route("/api/FeedbackAPI/DeleteFeedback/{mobno}")]
        public bool Delete(long mobno)
        {
            return feedback.DeleteFeedback(mobno);
        }
        [HttpGet]
        [Route("/api/FeedbackAPI/ShowAllFeebacks")]
        public List<Feedback> Get()
        {
            return feedback.ShowAllFeedback();
        }
    }
}
