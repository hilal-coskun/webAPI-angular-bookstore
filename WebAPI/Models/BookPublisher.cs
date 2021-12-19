using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class BookPublisher
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public int ContactID { get; set; }
        public Contact Contact { get; set; }
        public string About { get; set; }

        /*public DateTime RecordDate { get; set; }
        public BookPublisher()
        {
            RecordDate = DateTime.Now;
        }*/
        public List<Book> Book { get; set; }
    }
}
