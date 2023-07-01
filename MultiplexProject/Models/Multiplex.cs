using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace MultiplexProject.Models
{
    public class Multiplex
    {

        [Key]
        public int MultiplexId { get; set; }
        [Required]
        [StringLength(100)]
        public string MultiplexName { get; set; }
        [NotMapped]

        public ICollection<Screen> Screens { get; set; }
        [NotMapped]
        public ICollection<SeatMatrix> seatMatrices { get; set; }

    }
}
