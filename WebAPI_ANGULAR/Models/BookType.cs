using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class BookType
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }

        public int BookCategoryID { get; set; }
       public virtual BookCategory BookCategory { get; set; }
        /*
        public List<Book> Book { get; set; } */
    }
}
