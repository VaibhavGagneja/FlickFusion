using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public interface ITicket
    {
        List<CustomModel> ShowAllTicket();//custom model to view which screen maps to which movie
        bool AddTicket(Ticket ticket);
        bool DeleteTicket(long mobno);

        Ticket GetTicketByMobNo(long mobno);
    }
}
