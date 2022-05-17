import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserloginService } from '../userlogin.service';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  message:boolean=false;
  amessage:boolean=false;
  email!:string|null;
  aemail!:string|null;
  constructor(private service:UserloginService,private router:Router,private aservice:AdminloginService) { console.log(this.email)}

  public ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
      console.log(data);
      this.email=data;
      if(this.email!=null){
        this.message=true
      }
      });
      this.aservice.recievedStatus().subscribe((data)=>{
        console.log(data);
        this.aemail=data;
        if(this.aemail!=null){
          this.amessage=true
        }
      });
  }
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('Email');
    this.service.subject.next('');
    this.router.navigate(['login']); 
  }
  alogout(){
    console.log('admin hi')
    sessionStorage.removeItem('AEmail');
    this.aservice.subject.next('');
    this.router.navigate(['adminlogin'])
  }
  checkempty(){
    if(sessionStorage.getItem('Email')===null){
      this.message=false
    }
    else if(sessionStorage.getItem('Email')!=null){
      this.email=sessionStorage.getItem('Email')
      this.message=true
    }
    return this.message
  }
  acheckempty(){
    if(sessionStorage.getItem('AEmail')===null){
      this.amessage=false
    }
    else if(sessionStorage.getItem('AEmail')!=null){
      this.aemail=sessionStorage.getItem('AEmail')
      this.amessage=true
    }
    return this.amessage
  }
}
