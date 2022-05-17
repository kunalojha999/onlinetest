import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from '../subject.service';
import { QuestionService } from '../question.service';
import { Subjectt } from '../models/subject';
import { Question } from '../models/question';

@Component({
  selector: 'app-removequestion',
  templateUrl: './removequestion.component.html',
  styleUrls: ['./removequestion.component.scss']
})
export class RemovequestionComponent implements OnInit {
  sub!:Subjectt
  subForm!: FormGroup;
  questions!:Question[]
  viewques:boolean=false
  constructor(private router:Router,public fb: FormBuilder,public subservice:SubjectService,public quesservice:QuestionService) { }

  ngOnInit(): void {
    this.subForm = this.fb.group({
      Subname:['']
  });
  }
  subjectform(){
    this.subservice.getbyname(this.subForm!.value.Subname).subscribe((data)=>{
      this.sub=data,
      console.log(this.sub)
      if(this.sub!=null){
        this.viewques=true
        this.quesservice.getById(this.sub.id).subscribe((data)=>{
          this.questions=data,
          console.log(data)
          console.log(this.questions)
        })
      }
    })
  }
  delete(id:number)
  {
    this.quesservice.delete(id).subscribe((data)=>{
      this.quesservice.getById(this.sub.id).subscribe((data)=>{
        this.questions=data,
        console.log(data)
        console.log(this.questions)
      })
    });
    
  }
  return(){
    this.viewques=false
    this.subForm = this.fb.group({
      Subname:['']
  });
  }

}
