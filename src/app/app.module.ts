import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserregisterComponent } from './userregister/userregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { UserhomeComponent } from './userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { UserreportComponent } from './userreport/userreport.component';
import { ResetuserpasswordComponent } from './resetuserpassword/resetuserpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    NavbarComponent,
    UserregisterComponent,
    UserhomeComponent,
    TestComponent,
    UserreportComponent,
    ResetuserpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
    ,MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
