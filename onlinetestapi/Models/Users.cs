using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace onlinetestapi.Models
{
    public partial class Users
    {
        public Users()
        {
            Reports = new HashSet<Reports>();
        }

        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public long? Mobile { get; set; }
        public string City { get; set; }
        public DateTime? Dob { get; set; }
        public string State { get; set; }
        public string Qualification { get; set; }
        public int? Year { get; set; }

        public virtual ICollection<Reports> Reports { get; set; }
    }
}
