import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserregisterService } from '../userregister.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.scss']
})
export class UserregisterComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private router:Router,public fb: FormBuilder,public userregisterservice:UserregisterService) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      Email:[''],
      Name:[''],
      Password:[''],
      Mobile:[],
      City:[''],
      Dob:[],
      State:[''],
      Qualification:[''],
      Year:[]
  })
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
