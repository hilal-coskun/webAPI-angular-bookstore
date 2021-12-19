using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI_ANGULAR.Models
{
    public class PaymentChannel
    {
        public int ID { get; set; }
        public string Name { get; set; }

        public List<Order> Order { get; set; }
    }
}
