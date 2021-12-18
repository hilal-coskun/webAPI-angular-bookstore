using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class Author
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        //[Required]
        public string Name { get; set; }
        public string About { get; set; }
        public string Logo { get; set; }
        [NotMapped]
        public IFormFile LogoFile { get; set; }
        public DateTime RecordDate { get; set; }
        public Author()
        {
            RecordDate = DateTime.Now;
        }

        public List<Book> Book { get; set; }
    }
}
