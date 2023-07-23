using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/SeatMatrixAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]
    [Authorize]

    public class SeatMatrixAPIController : ControllerBase
    {

        readonly CodeFirstMultiplex db = null;
        readonly ISeatMatrix seatMatrix = null;

        public SeatMatrixAPIController(CodeFirstMultiplex db, ISeatMatrix seatMatrix)
        {

            this.db = db;
            this.seatMatrix = seatMatrix;
        }
        [HttpPost]
        [Route("/api/SeatMatrixAPI/AddSeat")]
        public bool Post([FromBody] SeatMatrix sm)
        {
            return seatMatrix.AddSeat(sm);
        }
        [HttpGet]
        [Route("/api/SeatMatrixAPI/ShowAllSeats")]
        public List<SeatMatrix> Get()
        {
            return seatMatrix.ShowAllSeats();
        }
        [HttpPut]
        [Route("/api/SeatMatrixAPI/UpdateSeat/{id}")]
        public string Update( int id,[FromBody] SeatMatrix sm)
        {
            return seatMatrix.UpdateSeat(id,sm);
        }
    }
}
