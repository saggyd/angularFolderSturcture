import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //LoginComponent
  ]
})
export class LoginModule { }
