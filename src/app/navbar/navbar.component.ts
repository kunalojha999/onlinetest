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

  constructor(private service:UserloginService,private router:Router) { }

  ngOnInit(): void {
    this.service.recievedStatus().subscribe((data)=>{
      this.message=data;//true
      });
  }
  logout()
  {
    console.log("hi");
    sessionStorage.removeItem('Email');
    this.service.subject.next(false);
    this.router.navigate(['login']); 
  } 

}
