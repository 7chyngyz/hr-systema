import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.components';
import { RoleComponent } from './pages/register/components/role/role.component';
import { JobSeekerRegisterComponent } from './pages/register/components/sign-up/jobseeker-register.component';
import { EmployerRegisterComponent } from './pages/register/components/sign-up/employer-register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'role', component: RoleComponent },
  { path: 'role', component: RoleComponent },
  { path: 'register/jobseeker', component: JobSeekerRegisterComponent },
  { path: 'register/employer', component: EmployerRegisterComponent },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
