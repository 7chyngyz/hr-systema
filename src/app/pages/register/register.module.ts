import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleComponent } from './components/role/role.component';
import { JobSeekerRegisterComponent } from './components/sign-up/jobseeker-register.component';
import { EmployerRegisterComponent } from './components/sign-up/employer-register.component';

@NgModule({
  declarations: [RoleComponent, JobSeekerRegisterComponent, EmployerRegisterComponent], 
  imports: [CommonModule, RouterModule], 
  exports: [RoleComponent, JobSeekerRegisterComponent, EmployerRegisterComponent] 
})
export class RegisterModule {}
