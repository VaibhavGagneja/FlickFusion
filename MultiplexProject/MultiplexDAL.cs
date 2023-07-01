using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public class MultiplexDAL : IMultiplex
    {
        CodeFirstMultiplex db = null;
        public MultiplexDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }
        public bool AddMultiplex(Multiplex multiplex)
        
        {
            try
            {
                db.Multiplex.Add(multiplex);
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

        public bool DeleteMultiplex(int MultiplexId)
        {
            try
            {
                var data = db.Multiplex.Where(x => x.MultiplexId == MultiplexId).FirstOrDefault();
                if (data != null)
                {
                    db.Multiplex.Remove(data);
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

        public List<Multiplex> ShowAllMultiplex()
        {


            try
            {
                var data = db.Multiplex.ToList();
                if (data.Count() > 0)
                    return data;
                else
                    throw new Exception("No Multiplex Found");
            }
            catch
            {
                throw;
            }

        }
    }
}
