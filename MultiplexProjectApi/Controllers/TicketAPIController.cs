using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/TicketAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class TicketAPIController : ControllerBase
    {
        readonly CodeFirstMultiplex db = null;
        readonly ITicket ticket = null;

        public TicketAPIController(CodeFirstMultiplex db, ITicket ticket)
        {

            this.db = db;
            this.ticket = ticket;
        }
        [HttpPost]
        [Route("/api/TicketAPI/AddTicket")]
        public bool Post([FromBody] Ticket f)
        {
            return ticket.AddTicket(f);
        }
        [HttpDelete]
        [Route("/api/TicketAPI/DeleteTicket/{mobno}")]
        public bool Delete(long mobno)
        {
            return ticket.DeleteTicket(mobno);
        }
        [HttpGet]
        [Route("/api/TicketAPI/GetTicketById/{mobno}")]
        public Ticket Get(long mobno)
        {
            return ticket.GetTicketByMobNo(mobno);
        }
        [HttpGet]
        [Route("/api/TicketAPI/ShowAllTickets")]
        public List<CustomModel> Get()
        {
            return ticket.ShowAllTicket();
        }
    }
}
