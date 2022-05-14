import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path:'changepassword',component:ResetuserpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
