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
  l1:Question[]=[]
  l2:Question[]=[]
  l3:Question[]=[]
  email!:string|null
  subid!:number
  score:number=0
  level:number=1
  selectedchoice!:string|null
  questionno:number=0
  clearchoice:boolean=true
  timeLeft: number =0;
  min!:number
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
      for (let index = 0; index < this.questions.length; index++) {
        if(this.questions[index].level=='1'){
        this.l1.push(this.questions[index]); 
        }
      else if(this.questions[index].level=='2'){
        this.l2.push(this.questions[index]);
      }
      else if(this.questions[index].level=='3'){
        this.l3.push(this.questions[index]);
      }
      }
      console.log(this.l1)
      console.log(this.l2)
      console.log(this.l3)
      this.min=2*this.questions.length
    })
    this.email=sessionStorage.getItem('Email')
  }
  increase(){
    if(this.selectedchoice==null){
      alert('please select a choice')
    }
    else{
    if(this.level==1){
    console.log(this.l1[this.questionno].answer)
    if(this.selectedchoice===this.l1[this.questionno].answer){
      this.score=this.score+10
    }
    console.log('score='+this.score)
    this.questionno=this.questionno+1
  }
  else if(this.level==2){
    console.log(this.l2[this.questionno].answer)
    console.log(this.selectedchoice)
    if(this.selectedchoice===this.l2[this.questionno].answer){
      console.log(this.selectedchoice)
      this.score=this.score+10
    }
    console.log('score='+this.score)
    this.questionno=this.questionno+1
  }
  else if(this.level==3){
    console.log(this.l3[this.questionno].answer)
    if(this.selectedchoice===this.l3[this.questionno].answer){
      this.score=this.score+10
    }
    console.log('score='+this.score)
    this.questionno=this.questionno+1
  }}
  this.selectedchoice=null
  }
  submit(){   
  if(this.level==3){
    this.increase()
    this.testsubmit=true
    this.questionno=0
    console.log('inside submit')
    this.test=3
    this.report.score=this.score
    this.report.level=this.level
    this.report.subid=this.subid
    this.report.useremail=this.email
    this.rservice.createreport(this.report).subscribe(res=>{console.log(res)});
  }
  else if(this.level==1){
    this.increase()
    if(this.score>=20){
    this.level=this.level+1
    this.questionno=0}
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
  else if(this.level==2){
    this.increase()
    if(this.score>=40){
    this.level=this.level+1
    this.questionno=0
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
    
  },this.min*60*1000);
    this.interval = setInterval(() => {
      if(this.timeLeft > 0&&this.min>=0) {
        this.timeLeft--;
      }
      if(this.timeLeft==0&&this.min>0){
        this.min--;
        this.timeLeft=60;
      }
    },1000)
  }
}
