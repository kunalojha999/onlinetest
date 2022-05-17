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
  public class UserController : ControllerBase
  {
    public gladiatorContext db;
    public UserController(gladiatorContext _db)
    {
      db = _db;
    }
    [HttpPost]
    public IActionResult register(Users u)
    {
      var result = db.Users.FirstOrDefault(x => x.Email == u.Email);
      if (result == null)
      {
        db.Users.Add(u);
        try {
          db.SaveChanges();
          return Ok();
        }
        catch(Exception e)
        {
          return BadRequest(); 
        }
        
      }
      else
        return BadRequest("User exists");
    }
    [HttpPost]
    [Route("login")]
    public IActionResult Login(UserLogin user)
    {
      var result = db.Users.FirstOrDefault(x => x.Email == user.Email && x.Password == user.Password);
      if (result != null)
      {
        return Ok(result);
      }
      else
        return Unauthorized();

    }
    [HttpPut]
    public IActionResult changePassword(UserLogin user)
    {
      var result = db.Users.FirstOrDefault(x => x.Email == user.Email);
      if (result != null)
      {
        result.Password = user.Password;
        db.Users.Update(result);
        try { 
        db.SaveChanges();
        return Ok();
        }
        catch (Exception e)
        {
          return BadRequest();
        }
      }
      else
        return BadRequest("User Not Found");
    }

    [HttpGet]
    public IActionResult getbyid(string state,string city)
    {
      return Ok(db.Users.Where(x =>x.State==state&&x.City==city));
    }

  }
}
