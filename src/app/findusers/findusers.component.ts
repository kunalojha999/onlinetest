import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserregisterService } from '../userregister.service';
@Component({
  selector: 'app-findusers',
  templateUrl: './findusers.component.html',
  styleUrls: ['./findusers.component.scss']
})
export class FindusersComponent implements OnInit {
  errorMessage!:string;
  userForm!: FormGroup;
  users!:User[]
  viewusers:boolean=false
  email!:string|null
  constructor(private router:Router,public fb: FormBuilder,public service:UserregisterService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      state:[''],
    city: [''],  
  })
  }
  submitform(){
    this.service.getbystate(this.userForm.value.state,this.userForm.value.city).subscribe((data)=>{
      this.users=data;
      console.log(this.users)
      this.viewusers=true
    })
  }
  return(){
    this.viewusers=false
    this.router.navigate(['findusers']);
    this.userForm = this.fb.group({
      state:[''],
    city: [''],  
  })
  }

}
