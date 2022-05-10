import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {

  route:string="login";
  constructor(private router:Router) { }

  click(){
    this.router.navigate(['login'])
  }
  ngOnInit(): void {
  }

}
