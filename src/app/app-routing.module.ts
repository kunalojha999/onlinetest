import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FindusersComponent } from './findusers/findusers.component';
import { RemovequestionComponent } from './removequestion/removequestion.component';
import { ResetuserpasswordComponent } from './resetuserpassword/resetuserpassword.component';
import { TestComponent } from './test/test.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserreportComponent } from './userreport/userreport.component';

const routes: Routes = [
  {path:'',component:UserhomeComponent},
  {path:'home',component:UserhomeComponent},
  {path:'login',component:UserloginComponent},
  {path:'register',component:UserregisterComponent},
  {path: 'question/:subid', component: TestComponent },
  {path:'report',component:UserreportComponent},
  {path:'changepassword',component:ResetuserpasswordComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'addquestion',component:AddquestionComponent},
  {path:'removequestion',component:RemovequestionComponent},
  {path:'findusers',component:FindusersComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'adminhome',component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
