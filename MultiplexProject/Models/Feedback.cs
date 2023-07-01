using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MultiplexProject.Models
{
    public class Feedback
    {
        [Key]
        public int FeedBackId { get; set; }
        [Required]
        [StringLength(200)]
        public string FeedBack { get; set; }
        [Required]
        [Range(0,5)]
        public int Rating { get; set; }

        public long MobileNo { get; set; }

        [ForeignKey("MobileNo")]
        public Register? Register { get; set; }

    }
}
