using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiplexProject.Models
{
    public class Screen
    {
        [Key]
        public int ScreenId { get; set; } 
        [Required]
        public int totalSeats { get; set; }
        [Required]
        [StringLength(50)]
        public string ScreenName { get; set; }

        public int MovieId { get; set; }

        [ForeignKey("MovieId")]
        public Movie? Movie { get; set; }
        public int MultiplexId { get; set; }

        [ForeignKey("MultiplexId")]
        public Multiplex? Multiplex { get; set; }
       /* [NotMapped]
        public ICollection<Movie> Movies { get; set; }*/

        [NotMapped]

        public ICollection<Ticket> Ticket { get; set; }
      /*  [NotMapped]

        public ICollection<SeatMatrix> seatMatrices { get; set; }*/
    }
}
