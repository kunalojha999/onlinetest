import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../question.service';
import { Question } from '../models/question';
import { Report } from '../models/report'; 
import { Router } from '@angular/router';
import { ReportService } from '../report.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  report:Report=new Report()
  testsubmit:boolean=false
  questions!:Question[]
  email!:string|null
  subid!:number
  score:number=0
  level:number=1
  selectedchoice!:string
  questionno:number=0
  clearchoice:boolean=true
  timeLeft: number =0;
  min:number=20;
  hour:number=0;
  interval:any;
  doredirect:boolean=false;
  test:number=1
  constructor(private router2:Router,private service:QuestionService,private router:ActivatedRoute,private rservice:ReportService) { }

  ngOnInit(): void {
    this.service.getById(this.router.snapshot.params['subid']).subscribe((data)=>{
      this.questions=data,
      this.subid=data[0].subid
      console.log(data)
      console.log(this.questions)
    })
    this.email=sessionStorage.getItem('Email')
  }
  increase(){
    console.log(this.questions[this.questionno].answer)
    if(this.selectedchoice===this.questions[this.questionno].answer){
      this.score=this.score+10
    }
    console.log('score='+this.score)
    this.questionno=this.questionno+1
  }
  submit(){   
  if(this.level==3){
    this.testsubmit=true
    console.log('inside submit')
    this.test=3
    this.report.score=this.score
    this.report.level=this.level
    this.report.subid=this.subid
    this.report.useremail=this.email
    this.rservice.createreport(this.report).subscribe(res=>{console.log(res)});
  }
  else if(this.score>=20){
    this.increase()
    this.level=this.level+1
  }
  else{
    this.testsubmit=true
    this.test=3
    this.report.score=this.score
    this.report.level=this.level
    this.report.subid=this.subid
    this.report.useremail=this.email
    this.rservice.createreport(this.report).subscribe(res=>{console.log(res)});
  }
  }

  startTest() {
    this.test=2;
    setTimeout(() => {
      if(this.testsubmit==false){
    this.test=3
    this.report.level=this.level
    this.report.subid=this.subid
    this.report.useremail=this.email
    this.report.score=this.score
    console.log(this.report)
    this.rservice.createreport(this.report).subscribe(res=>{console.log("Report created")});}
    
  },1200000);
    this.interval = setInterval(() => {
      if(this.timeLeft > 0&&this.min>=0) {
        this.timeLeft--;
      }
      if(this.timeLeft==0&&this.min>0){
        this.min--;
        this.timeLeft=60;
      }
      if(this.min==0&&this.hour>0){
        this.hour--;
        this.min=1;
      } 
    },1000)
  }
}
