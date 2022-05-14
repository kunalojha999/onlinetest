import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subjectt } from '../models/subject';
import { UserloginService } from '../userlogin.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent implements OnInit {
  message:boolean=false;
  subjects!:Subjectt[]
  constructor(private router:Router,public subjectservice:SubjectService,private service:UserloginService) {
    subjectservice.getAll().subscribe((data)=>{
      console.log(data);
      this.subjects=data})
      if(sessionStorage.getItem('Email')!=null){
        this.message=true;
        console.log(sessionStorage.getItem('Email'))
      }
   }
  ngOnInit(): void { 
  }

}
