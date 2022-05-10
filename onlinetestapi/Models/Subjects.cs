using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace onlinetestapi.Models
{
    public partial class Subjects
    {
        public Subjects()
        {
            Questions = new HashSet<Questions>();
            Reports = new HashSet<Reports>();
        }

        public int Id { get; set; }
        public string Subname { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Questions> Questions { get; set; }
        public virtual ICollection<Reports> Reports { get; set; }
    }
}
