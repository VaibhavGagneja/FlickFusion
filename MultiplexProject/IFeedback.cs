using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public interface IFeedback
    {
        bool AddFeedback(Feedback feedback);
        bool DeleteFeedback(long MobileNo);
        List<Feedback> ShowAllFeedback();

       // bool UpdateFeedback(int MobileNo, Feedback feedback);


    }
}
