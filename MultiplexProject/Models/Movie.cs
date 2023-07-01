using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MultiplexProject.Models
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        [Required]
        [StringLength(100)]
        public string MovieName { get; set; }
        [Required]
        [StringLength(200)]
        public string MovieDescription { get; set; }
        [Required]
        [StringLength(200)]

        public string MovieLanguage { get; set; }
        [Required, MaxLength]

        public string MovieImage { get; set; }
        [Required]
        [StringLength(50)]
        public string MovieDuration { get; set; }
        [Required]
        [StringLength(50)]
        public string MovieType { get; set; }

       /* [Required]
        public decimal Price { get; set; }
        public int? ScreenId { get; set; }

        [ForeignKey("ScreenId")]
        public Screen? Screen { get; set; }*/
        [NotMapped]

        public ICollection<Ticket> Ticket { get; set; }
        [NotMapped]
        public ICollection<Screen> Screen { get; set; }
    }
}
