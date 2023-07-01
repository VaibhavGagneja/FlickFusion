using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    
    public class ScreenDAL:IScreen
    {

        CodeFirstMultiplex db = null;
        public ScreenDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }

        public bool AddScreen(Screen screen)
        {
            try
            {

            db.Screen.Add(screen);
            var res = db.SaveChanges();
            if(res > 0)
            {
                    return true;
            }
            
            }
            catch
            {
                throw;
            }
            return false;
        }

        public bool DeleteScreen(int ScreenId)
        {
            try
            {
                var data = db.Screen.Where(x => x.ScreenId == ScreenId).SingleOrDefault();
                if(data != null)
                {
                    db.Screen.Remove(data);
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

        public List<CustomModel> GetScreenByMultiplexId(int id)
        {
            try
            {
                /*var data = (from t in db.Ticket
                            join u in db.Registers on t.MobileNo equals u.MobileNo
                            orderby t.MobileNo descending
                            select t.TicketId).FirstOrDefault();
                */
                var data = (from s in db.Screen
                            join m in db.Movie
                            on s.MovieId equals m.MovieId

                            select new CustomModel
                            {
                                MultiplexId = s.MultiplexId,
                                ScreenId = s.ScreenId,
                                MovieName = m.MovieName,
                                MovieId = m.MovieId,
                                MovieType = m.MovieType,
                                MovieDescription = m.MovieDescription,
                                MovieImage = m.MovieImage,
                                MovieLanguage = m.MovieLanguage,
                                MovieDuration = m.MovieDuration
                            });
                var res = data.Where(x => x.MultiplexId == id);
                if (res == null)
                    throw new Exception("Invalid mobile number");
                else
                    return res.ToList();
            }
            catch
            {
                throw;
            }
        }

        public List<CustomModel> ShowAllScreen()
        {
            try
            {

                var data = (//from t in db.Ticket//change join on basis of movie and screen
                            from s in db.Screen
                            join m in db.Movie 
                            on s.MovieId equals m.MovieId
                            join mul in db.Multiplex
                            on s.MultiplexId equals mul.MultiplexId
                            select new CustomModel
                            {
                                ScreenId = s.ScreenId,
                                MovieName = m.MovieName,
                                MovieType = m.MovieType,
                                MultiplexId = s.MultiplexId,
                                MultiplexName =mul.MultiplexName
                            }).ToList();
                return data;
            }
            catch
            {
                throw;
            }
        }
    }
}
