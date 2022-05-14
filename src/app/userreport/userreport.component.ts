import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subjectt } from '../models/subject';
import { ReportService } from '../report.service';
import { Report } from '../models/report';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.component.html',
  styleUrls: ['./userreport.component.scss']
})
export class UserreportComponent implements OnInit {
  viewreport:boolean=false
  reports!:Report[]
  subname!:string
  subid!:number
  subjects!:Subjectt[];
  email!:string|null
  constructor(private router:Router,public subjectservice:SubjectService,private service:UserloginService,private rservice:ReportService) {
    subjectservice.getAll().subscribe((data)=>{
      console.log(data);
      this.subjects=data})
      if(sessionStorage.getItem('Email')!=null){
        this.email=sessionStorage.getItem('Email')
        console.log(this.email)
      }
   }
   getreports(){
   this.rservice.getreport(this.subid,this.email).subscribe((data)=>{
    console.log(data) 
    this.reports=data})
    this.viewreport=true
   }
   getsubname(subid:number){
     this.subid=subid
     for (let index = 0; index < this.subjects.length; index++) {
       if(this.subjects[index].id===subid)
       this.subname = this.subjects[index].subname;     
     }
   }
   returntoreport(){
    this.viewreport=false
   }
  ngOnInit(): void {
  }
}
