using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class Translator
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string About { get; set; }
        public string Logo { get; set; }

        public DateTime RecordDate { get; set; }
        public Translator()
        {
            RecordDate = DateTime.Now;
        }

        public List<Book> Book { get; set; }

        [NotMapped]
        public IFormFile LogoFile { get; set; }

    }
}
