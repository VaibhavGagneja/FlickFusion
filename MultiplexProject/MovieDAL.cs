using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public class MovieDAL : IMovie
    {
        CodeFirstMultiplex db = null;
        public MovieDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }
        public bool AddMovie(Movie m)
        {
            try
            {
               // m.MovieImage = ConvertImageToBase64(m.MovieImage); 
                db.Movie.Add(m);
                var res = db.SaveChanges();
                if (res > 0)
                    return true;
            }
            catch
            {
                throw;
            }
            return false;
        }

        public bool DeleteMovie(int MovieId)
        {
            try
            {
                var data = db.Movie.Where(x => x.MovieId == MovieId).FirstOrDefault();
                if (data != null)
                {
                    db.Movie.Remove(data);
                    var re = db.SaveChanges();
                    if (re > 0)
                        return true;
                }
                else
                {
                    throw new Exception("No data deleted");
                }
            }
            catch
            {
                throw;
            }
            return false;
        }

        public List<Movie> ShowAllMovies()
        {
            try
            {
                var data = db.Movie.ToList();
                if (data.Count() > 0)
                    return data;
                else
                    throw new Exception("No Movies Found");
            }
            catch
            {
                throw;
            }
        }

        public bool UpdateMovie(int MovieId, Movie m)
        {
            try
            {

            var data = db.Movie.Where(x => x.MovieId == MovieId).FirstOrDefault();


            if (data != null)
            {
                data.MovieName = m.MovieName;
                data.MovieDescription = m.MovieDescription;
                data.MovieDuration = m.MovieDuration;
                data.MovieImage = m.MovieImage;
               
                data.MovieType = m.MovieType;    
               

                var r = db.SaveChanges();
                if (r > 0)
                    return true;
                
            }
                else
                    throw new Exception("Data is null");
            }
            catch
            {
                throw;
            }
            return false;
        }
       /* public string ConvertImageToBase64(string filename)
        {
            byte[] imageArray = System.IO.File.ReadAllBytes(@filename);
            string base64ImageRepresentation = Convert.ToBase64String(imageArray);
            return base64ImageRepresentation;



        }
        public static byte[] BytesFromBase64ImageString(string imageData)
        {
            var trunc = imageData.Split(',')[1];
            var padded = trunc.PadRight(trunc.Length + (4 - trunc.Length % 4) % 4, '=');
            return Convert.FromBase64String(padded);
        }*/
    }
}
