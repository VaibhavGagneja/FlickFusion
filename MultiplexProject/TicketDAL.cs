using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public class TicketDAL : ITicket
    {
        CodeFirstMultiplex db = null;
        public TicketDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }

        public bool AddTicket(Ticket ticket)
        {
            try
            {
                db.Ticket.Add(ticket);
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

        public bool DeleteTicket(long mobno)
        {
            try
            {
                var data = (from t in db.Ticket join u in db.Registers on t.MobileNo equals u.MobileNo orderby t.MobileNo descending
                           select t.TicketId ).FirstOrDefault();
                //var data = db.Ticket.Where(x => x.MobileNo == mobno).FirstOrDefault();
                var row = db.Ticket.Where(x => x.TicketId == data).FirstOrDefault();
                if (row != null)
                {
                    db.Ticket.Remove(row);
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

        public Ticket GetTicketByMobNo(long mobno)
        {
            try
            {
                var data = db.Ticket.Where(x => x.MobileNo == mobno).FirstOrDefault();
                if (data == null)
                    throw new Exception("Invalid mobile number");
                else
                    return data;
            }
            catch
            {
                throw;
            }
        }

        public List<CustomModel> ShowAllTicket()
        {
            try
            {

                var data = (from t in db.Ticket
                       join r in db.Registers
                        on t.MobileNo equals r.MobileNo
                        join m in db.Movie
                       on t.MovieId equals m.MovieId
                       join s in db.Screen
                       on t.MovieId equals s.MovieId
                       select new CustomModel
                            {
                                Movietiming = t.Movietiming,
                                TicketId = t.TicketId,
                                Name = r.Name,
                                MovieName = m.MovieName,
                                TicketType = t.TicketType,
                                ScreenId = s.ScreenId,
                                MovieType = m.MovieType,
                                MovieDuration = m.MovieDuration,
                                Price = t.Price,
                            }).ToList();
                if(data.Count() == 0)
                {
                    throw new Exception("invalid selection");
                }
                return data;
            }
            catch
            {
                throw;
            }
        }
    }
}
