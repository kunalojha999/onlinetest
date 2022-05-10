using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace onlinetestapi.Models
{
    public partial class Reports
    {
        public int Sno { get; set; }
        public string Useremail { get; set; }
        public int? Subid { get; set; }
        public int? Score { get; set; }
        public int? Level { get; set; }

        public virtual Subjects Sub { get; set; }
        public virtual Users UseremailNavigation { get; set; }
    }
}
