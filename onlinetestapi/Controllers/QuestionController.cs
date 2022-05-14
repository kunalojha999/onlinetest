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
  public class QuestionController : ControllerBase
  {
    public gladiatorContext db;
    public QuestionController(gladiatorContext _db)
    {
      db = _db;
    }
    [HttpGet("{subid}")]
    public IActionResult getbyid(int subid)
    {
      return Ok(db.Questions.Where(x=>x.Subid==subid));
    }
  }
}
