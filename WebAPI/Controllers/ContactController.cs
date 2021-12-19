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
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ContactController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select ID, Name, Mobile from dbo.Contact";
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
        public JsonResult Post(Contact c)
        {
            string query = @"insert into BCatalog2.dbo.Contact(Name, Title, Mobile, Email) values 
                              ('" + c.Name + @"',
                               '" + c.Title + @"',
                               '" + c.Mobile + @"',
                               '" + c.Email + @"')
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
        public JsonResult Put(Contact c)
        {
            string query = @"
                            update BCatalog2.dbo.Contact set 
                         
                            Name='" + c.Name + @"',
                            Title='" + c.Title + @"',
                            Mobile='" + c.Mobile + @"',
                            Email='" + c.Email + @"'
                            where ID = " + c.ID + @"
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
                            delete from BCatalog2.dbo.Contact
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
