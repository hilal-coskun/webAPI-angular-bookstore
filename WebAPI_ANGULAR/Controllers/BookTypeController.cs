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
    public class BookTypeController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public BookTypeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select BCatalog2.dbo.BookType.Name, BCatalog2.dbo.BookCategory.Name
                           from BCatalog2.dbo.BookCategory
                           Inner join BCatalog2.dbo.BookType ON BCatalog2.dbo.BookCategory.ID = BCatalog2.dbo.BookType.BookCategoryID";
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
        public JsonResult Post(BookType bt)
        {
            string query = @"insert into BCatalog2.dbo.BookType(Name, BookCategoryID) values 
                              ('" + bt.Name + @"',
                              '" + bt.BookCategoryID + @"')
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
        public JsonResult Put(BookType bt)
        {
            string query = @"
                            update BCatalog2.dbo.BookType set 
                            Name='" + bt.Name + @"',
                            BookCategoryID= '"+bt.BookCategoryID+@"'
                            where ID = " + bt.ID + @"
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
                            delete from BCatalog2.dbo.BookType
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
