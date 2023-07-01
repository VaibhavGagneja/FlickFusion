using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

using System.Threading.Tasks;

namespace MultiplexProject.Models
{
    public class Ticket
    {
        [Key]
        public int TicketId { get; set; }
        [Required]
        //public DateTime CreatedAt { get; set; }
        public string Movietiming { get; set; }
        [Required]
        [StringLength(50)]
        public string TicketType { get; set; }

        [Required]
        public decimal Price { get; set; }//added
        [Required]
        public int Quantity { get; set; }//total tickets
        /*[Required]
        [MaxLength]
        public string? SeatNumbers { get; set; } //please enter seat number with comma [ . . . . . ]*/
        public int ScreenId { get; set; }
        /*[ForeignKey("ScreenId")]
        public Screen? Screen { get; set; }*/
        public int MovieId { get; set; }

        [ForeignKey("MovieId")]
        public Movie? Movie { get; set; }
        public long MobileNo { get; set; }

        [ForeignKey("MobileNo")]
        public Register? Register { get; set; }




    }
}
