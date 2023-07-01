using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MultiplexProject.Models;
namespace MultiplexProject.Models
{
    public class CustomModel
    {
        public int? TicketId { get; set; }
        /*        public DateTime? CreatedAt { get; set; }
        */
        public string Movietiming { get; set; }

        public string? TicketType { get; set; }
        public int? ScreenId { get; set; }
        public string? Name { get; set; }
        public decimal? Price { get; set; }
        public string? MovieDuration { get; set; }
        public string? MovieName { get; set; }
        public string? MovieType { get; set; }
        public string? MultiplexName { get; set; }
        public int? MultiplexId { get; set; }
        public string? MovieDescription { get; set; }
       

        public string? MovieLanguage { get; set; }
        

        public string? MovieImage { get; set; }
      
        public int? MovieId { get; set; }


    }
}
