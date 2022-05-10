using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace onlinetestapi.Models
{
    public partial class Questions
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public string Answer { get; set; }
        public int Level { get; set; }
        public string C1 { get; set; }
        public string C2 { get; set; }
        public string C3 { get; set; }
        public string C4 { get; set; }
        public int? Subid { get; set; }

        public virtual Subjects Sub { get; set; }
    }
}
