import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-resetuserpassword',
  templateUrl: './resetuserpassword.component.html',
  styleUrls: ['./resetuserpassword.component.scss']
})
export class ResetuserpasswordComponent implements OnInit {
  errorMessage!:string;
  resetPasswordForm!: FormGroup;
  email!:string|null
  constructor(private router:Router,public fb: FormBuilder,public userloginservice:UserloginService) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      Email:[''],
    Password: [''],
  })
}
submitForm() {
  this.userloginservice.changepassword(this.resetPasswordForm!.value).subscribe(res => {
    console.log('resetpassword successful'),
    this.router.navigate(['login']);
  },
  error => {    
    this.errorMessage = "Reset Password failed";    
  }
  );
  
}
}
