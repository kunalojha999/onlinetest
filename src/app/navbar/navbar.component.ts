import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  message:boolean=false;
  email!:string|null
  constructor(private service:UserloginService,private router:Router) { console.log(this.email)}

  public ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
      console.log(data);
      this.email=data;//true
      if(this.email!=null){
        this.message=true
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
}
