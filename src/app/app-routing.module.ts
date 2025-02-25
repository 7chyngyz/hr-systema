import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.components';
import { LoginComponent } from './pages/register/components/sign-in/login.component';
import { ResetPasswordComponent } from './pages/register/components/sign-in/reset-password.component';
import { RegisterComponent } from './pages/register/components/sign-up/register.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-vacancy', component: VacanciesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
