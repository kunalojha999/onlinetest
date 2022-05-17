import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from '../adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  errorMessage!:string;
  adminloginForm!: FormGroup;
  email!:string|null
  constructor(private router:Router,public fb: FormBuilder,public adminloginservice:AdminloginService) { }
  ngOnInit(): void { 
    sessionStorage.removeItem('AEmail');    
    this.adminloginForm = this.fb.group({
      Email:[''],
    Password: [''],  
  })
   }
   submitForm() {
    this.adminloginservice.login(this.adminloginForm!.value).subscribe(res => {
      sessionStorage.setItem('AEmail',this.adminloginForm.value.Email)
      this.email=sessionStorage.getItem('AEmail')
      this.adminloginservice.subject.next(this.email);
      console.log('admin login successful'),
      console.log(sessionStorage.getItem('AEmail'))
      this.router.navigate(['adminhome']);
    },
    error => {
      console.log(this.adminloginForm.value)    
      this.errorMessage = "Admin Login Failed";    
    }
    );
    
  }

}
