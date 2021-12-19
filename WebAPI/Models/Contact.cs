using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class Contact
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        //public bool IsCorporation { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }

        public DateTime RecordDate { get; set; }
        public Contact()
        {
            RecordDate = DateTime.Now;
        }

        public List<BookPublisher> BookPublisher { get; set; }
        public List<Order> Order { get; set; }
    }
}
