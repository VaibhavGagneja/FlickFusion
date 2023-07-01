using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public interface ISeatMatrix
    {
        bool AddSeat(SeatMatrix sm);
        List<SeatMatrix> ShowAllSeats();
        string UpdateSeat(int MatrixId,SeatMatrix sm);
    }
}
