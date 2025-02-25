import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/sign-in/login.component';
import { ResetPasswordComponent } from './components/sign-in/reset-password.component';
import { RegisterComponent } from './components/sign-up/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ResetPasswordComponent], 
  imports: [CommonModule, RouterModule, FormsModule], 
  exports: [RegisterComponent, LoginComponent, ResetPasswordComponent] 
})
export class RegisterModule {}
