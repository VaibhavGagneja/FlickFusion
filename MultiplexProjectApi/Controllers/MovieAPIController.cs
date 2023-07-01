using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using MultiplexProject.Models;
using MultiplexProject;
using Microsoft.AspNetCore.Cors;

namespace MultiplexProjectApi.Controllers
{
    [Route("api/MovieAPI")]
    [EnableCors("MyPolicy")]
    [ApiController]

    public class MovieAPIController : ControllerBase
    {
        readonly CodeFirstMultiplex db = null;
        readonly IMovie movie = null;

        public MovieAPIController(CodeFirstMultiplex db, IMovie movie)
        {

            this.db = db;
            this.movie = movie;
        }
        [HttpPost]
        [Route("/api/MovieAPI/AddMovie")]
        public bool Post([FromBody] Movie f)
        {
            return movie.AddMovie(f);
        }
        [HttpDelete]
        [Route("/api/MovieAPI/DeleteMovie/{id}")]
        public bool Delete(int id)
        {
            return movie.DeleteMovie(id);
        }
        [HttpGet]
        [Route("/api/MovieAPI/ShowAllMovies")]
        public List<Movie> Get()
        {
            return movie.ShowAllMovies();
        }
        [HttpPut]
        [Route("/api/MovieAPI/UpdateMovie/{id}")]
        public bool Update(int id,[FromBody] Movie m)
        {
            return movie.UpdateMovie(id, m);
        }
    }
}