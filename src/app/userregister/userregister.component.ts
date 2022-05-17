import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {
  userForm=new FormGroup({
    Email:new FormControl('',[Validators.pattern("^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$"),Validators.required]),
    Name:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.pattern("^(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$"),Validators.required]),
    Mobile:new FormControl(),
    City:new FormControl('',[Validators.required]),
    Dob:new FormControl(),
    State:new FormControl('',[Validators.required]),
    Qualification:new FormControl('',[Validators.required]),
    Year:new FormControl()
  });
  constructor(private router:Router,public fb: FormBuilder,public userregisterservice:UserregisterService) { }
  get Email() {
    return this.userForm.get('Email');
  }
  get Name() {
    return this.userForm.get('Name');
  }
  get Password() {
    return this.userForm.get('Password');
  }
  get City() {
    return this.userForm.get('City');
  }
  get State() {
    return this.userForm.get('State');
  }
  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.userForm.value)
    this.userregisterservice.create(this.userForm!.value).subscribe(res => {
      console.log('User Registered!'),
      console.log(res),
      alert("Registration Successful")
      this.router.navigate(['login']);
    });
  }

}
