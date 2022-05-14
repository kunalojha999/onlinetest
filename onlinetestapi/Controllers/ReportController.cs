using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using onlinetestapi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace onlinetestapi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ReportController : ControllerBase
  {
    public gladiatorContext db;
    public ReportController(gladiatorContext _db)
    {
      db = _db;
    }
    [HttpPost]
    public IActionResult addreport(Reports r)
    {
        db.Reports.Add(r);
        db.SaveChanges();
        return Ok();
    }
    [HttpGet("{useremail}/{subid}")]
    public IActionResult GetInfo(int subid, string useremail)
    {
      var reports = db.Reports.Where(x => x.Useremail == useremail && x.Subid == subid);
      return Ok(reports);

    }
  }
}
