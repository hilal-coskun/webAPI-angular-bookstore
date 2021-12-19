using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using WebAPI_ANGULAR.Models;

namespace WebAPI_ANGULAR.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public BookController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select ID,Name, Blurb, Picture, BookPublisherID, Price from BCatalog2.dbo.Book";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Book b)
        {
            string query = @"insert into BCatalog2.dbo.Book(Name, Price, Picture, RecordDate, LanguageID, PaperTypeID, AuthorID,
                            BookPublisherID, BookTypeID, TranslatorID, PagesOfNumber, Blurb, ISBN, AmountOfStock, Size, BookCategoryID) values 
                              ('" + b.Name + @"',
                              '" + b.Price + @"',
                              '" + b.Picture + @"',
                              '" + b.RecordDate + @"',
                              '" + b.LanguageID  +@"',
                              '" + b.PaperTypeID +@"',
                              '" + b.AuthorID+@"',
                              '" + b.BookPublisherID+@"',
                              '" + b.BookTypeID+@"',
                              '" + b.TranslatorID+ @"',
                              '" + b.PagesOfNumber+@"',
                              '" + b.Blurb+@"',
                              '" + b.ISBN+@"',
                              '" + b.AmountOfStock+@"',
                              '" + b.Size+ @"',
                              '" + b.BookCategoryID+@"')
                              ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added successfully");
        }
        

        [HttpPut]
        public JsonResult Put(Book b)
        {
            string query = @"
                            update BCatalog2.dbo.Book set 
                            Name='" + b.Name + @"',
                            Price= '" + b.Price + @"',
                            Logo= '" + b.Picture + @"',
                            LanguageID= '" + b.LanguageID + @"',
                            PaperTypeID= '" + b.PaperTypeID + @"',
                            AuthorID= '" + b.AuthorID + @"',
                            BookPublisherID= '" + b.BookPublisherID + @"',
                            BookTypeID= '" + b.BookTypeID + @"',
                            TranslatorID= '" + b.TranslatorID + @"',
                            PagesOfNumber= '" + b.PagesOfNumber + @"',
                            Blurb= '" + b.Blurb + @"',
                            ISBN= '" + b.ISBN + @"',
                            AmountOfStock= '" + b.AmountOfStock + @"',
                            Size= '" + b.Size + @"',
                            BookCategoryID= '" + b.BookCategoryID + @"',
                            where ID = " + b.ID + @"
                           ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Update successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                            delete from BCatalog2.dbo.Book
                            where ID = " + id + @"
                           ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DataAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted successfully");
        }
    }
}
