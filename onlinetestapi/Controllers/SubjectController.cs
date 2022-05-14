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
  public class SubjectController : ControllerBase
  {
    public gladiatorContext db;
    public SubjectController(gladiatorContext _db)
    {
      db = _db;
    }
    [HttpGet]
    public IActionResult getall()
    {
      return Ok(db.Subjects);
    }
  }
}
