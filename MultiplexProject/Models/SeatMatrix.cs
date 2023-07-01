using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiplexProject.Models
{
    public class SeatMatrix
    {
        // MatrixId MultiplexId(Fk) ScreenID(FK) GoldSeats SilverSeats  PlatinumSeats
        // OccupiedSeatsGold OccupiedSeatsSilver OccupiedSeatsPlatinum
        [Key]
        public int MatrixId { get; set; }
        [Required]
        public int MultiplexId { get; set; }

        [ForeignKey("MultiplexId")]
        public Multiplex? Multiplex { get; set; }

        public int ScreenId { get; set; }
        /*[ForeignKey("ScreenId")]
        public Screen? Screen { get; set; }*/
        [Required]
        public int GoldSeats { get; set; } 
        [Required]
        public int SilverSeats { get; set; } 
        [Required]
        public int PremiumSeats { get; set; }
        [Required, MaxLength]

        public string OccupiedSeatsGold { get; set; }
        [Required, MaxLength]

        public string OccupiedSeatsSilver { get; set; }
        [Required, MaxLength]

        public string OccupiedSeatsPremium { get; set; }
    }
}
