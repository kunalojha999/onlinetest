import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { QuestionService } from '../question.service';
import { Subjectt } from '../models/subject';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.scss']
})
export class AddquestionComponent implements OnInit {
  sub!:Subjectt
  subForm!: FormGroup;
  quesForm!: FormGroup;
  viewques:boolean=false
  constructor(private router:Router,public fb: FormBuilder,public subservice:SubjectService,public quesservice:QuestionService) { }

  ngOnInit(): void {
    this.subForm = this.fb.group({
      Subname:['']
  });
  this.quesForm=this.fb.group({
    body:[''],
    answer:[''],
    level:[],
    c1:[''],
    c2:[''],
    c3:[''],
    c4:[''],
    subid:[]
  });
  }
  subjectform(){
    this.subservice.getbyname(this.subForm!.value.Subname).subscribe((data)=>{
      this.sub=data,
      console.log(this.sub)
      if(this.sub!=null){
        this.viewques=true
        this.quesForm!.value.subid=this.sub.id
      }
    })
  }
  questionform(){
    this.quesForm!.value.subid=this.sub.id
    console.log(this.quesForm!.value)
    this.quesservice.create(this.quesForm!.value).subscribe(res => {
      console.log('Question Added!'),
      console.log(res),
      this.router.navigate(['home']);
    });
  }
  cancel(){
    this.viewques=false
    this.subForm = this.fb.group({
      Subname:['']
  });
  }
  }
