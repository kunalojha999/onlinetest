import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  errorMessage!:string;
  userloginForm!: FormGroup;

  constructor(private router:Router,public fb: FormBuilder,public userloginservice:UserloginService) { }

  ngOnInit(): void {
    sessionStorage.removeItem('Email');    
    this.userloginForm = this.fb.group({
      Email:[''],
    Password: [''],  
  })
  }
  submitForm() {
    this.userloginservice.login(this.userloginForm!.value).subscribe(res => {
      sessionStorage.setItem('Email',this.userloginForm.value.Email)
      this.userloginservice.subject.next(true);
      console.log('login successful'),
      console.log(res)
      console.log(sessionStorage.getItem('Email'))
      this.router.navigate(['home']);
    },
    error => {    
      this.errorMessage = "Login Failed";    
    }
    );
    
  }

}
