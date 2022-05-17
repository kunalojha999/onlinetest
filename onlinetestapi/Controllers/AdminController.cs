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
  public class AdminController : ControllerBase
  {
    public gladiatorContext db;
    public AdminController(gladiatorContext _db)
    {
      db = _db;
    }

    [HttpPost]
    [Route("login")]
    public IActionResult Login(Admins a)
    {
      var result = db.Admins.FirstOrDefault(x => x.Email == a.Email && x.Password == a.Password);
      if (result != null)
      {
        return Ok(result);
      }
      else
        return Unauthorized("Not found");

    }
  }
}
