using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class Book
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        //[Required]
        public int LanguageID { get; set; }
        public Language Language { get; set; }
        //[Required]
        public int PaperTypeID { get; set; }
        public PaperType PaperType { get; set; }
        //[Required]
        public int AuthorID { get; set; }
        public Author Author { get; set; }
        //[Required]
        public int BookPublisherID { get; set; }
        public BookPublisher BookPublisher { get; set; }
        //[Required]
        public int BookTypeID { get; set; }
        public BookType BookType { get; set; }
        //[Required]
        public int BookCategoryID { get; set; }
        public BookCategory BookCategory { get; set; }
        //[Required]
        public int TranslatorID { get; set; }
        public Translator Translator { get; set; }
        //[Required]
        public string Name { get; set; }
        //[Required]
        public decimal Price { get; set; }
        //[Required]
        public string PagesOfNumber { get; set; }
        //[Required]
        public string Blurb { get; set; }
        //[Required]
        public int ISBN { get; set; }
        //[Required]
        public int AmountOfStock { get; set; }
        //[Required]
        public string Size { get; set; }

        public DateTime RecordDate { get; set; }
        public Book()
        {
            RecordDate = DateTime.Now;
        }

        public string Picture { get; set; }
        [NotMapped]
        public IFormFile PictureFile { get; set; }

        public List<Order> Order { get; set; }
    }
}
