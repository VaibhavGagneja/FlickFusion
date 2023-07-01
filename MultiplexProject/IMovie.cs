using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public interface IMovie
    {

        bool AddMovie(Movie m);
        List<Movie> ShowAllMovies();
        bool DeleteMovie(int MovieId);
        bool UpdateMovie(int MovieId, Movie m);
    }
}
