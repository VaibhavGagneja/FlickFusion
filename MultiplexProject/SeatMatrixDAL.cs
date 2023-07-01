using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;

namespace MultiplexProject
{
    public class SeatMatrixDAL : ISeatMatrix
    {
            CodeFirstMultiplex db = null;
            public SeatMatrixDAL(CodeFirstMultiplex db)
            {
                this.db = db;
            }
        public bool AddSeat(SeatMatrix sm)
        {
            try
            {
                db.seatMatrices.Add(sm);
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

        public List<SeatMatrix> ShowAllSeats()
        {
            try
            {
                var data = db.seatMatrices.ToList();
                if (data.Count() > 0)
                    return data;
                else
                    throw new Exception("No Seats Found");
            }
            catch
            {
                throw;
            }
        }

        public string UpdateSeat(int MatrixId ,SeatMatrix sm)
        {
            try
            {

                var data = db.seatMatrices.Where(x => x.MatrixId == MatrixId).FirstOrDefault();


                if (data != null)
                {
                    data.MatrixId = sm.MatrixId;
                    data.ScreenId = sm.ScreenId;
                    data.MultiplexId = sm.MultiplexId;
                    data.GoldSeats = sm.GoldSeats;
                    data.SilverSeats = sm.SilverSeats;
                    data.PremiumSeats = sm.PremiumSeats;
                    data.OccupiedSeatsGold = sm.OccupiedSeatsGold;
                    data.OccupiedSeatsSilver = sm.OccupiedSeatsSilver;
                    data.OccupiedSeatsPremium = sm.OccupiedSeatsPremium;

                 


                    var r = db.SaveChanges();
                    if (r > 0)
                        return "Data Updated";

                }
                else
                    throw new Exception("Data is null");
            }
            catch
            {
                throw;
            }
            return "Data update unsuccessful";
        }
    }
}
