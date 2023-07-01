using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject
{
    public class FeedbackDAL : IFeedback
    {
        CodeFirstMultiplex db = null;
        public FeedbackDAL(CodeFirstMultiplex db)
        {
            this.db = db;
        }
        public bool AddFeedback(Feedback feedback)
        {
            try
            {
                db.Feedbacks.Add(feedback);
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

        public bool DeleteFeedback(long MobileNo)
        {
            try
            {
                var data = db.Feedbacks.Where(x => x.MobileNo == MobileNo).FirstOrDefault();
                if (data != null)
                {
                    db.Feedbacks.Remove(data);
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
    

        public List<Feedback> ShowAllFeedback()
        {
            

            try
            {
                var data = db.Feedbacks.ToList();
                if (data.Count() > 0)
                    return data;
                else
                    throw new Exception("No Feedback Found");
            }
            catch
            {
                throw;
            }
        
        }
    }
}
