import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.components';
import { LoginComponent } from './pages/register/components/sign-in/login.component';
import { ResetPasswordComponent } from './pages/register/components/sign-in/reset-password.component';
import { RegisterComponent } from './pages/register/components/sign-up/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditVacancyComponent } from './pages/admin/employer/components/edit-vacancy/edit-vacancy.component';
import { CreateVacanciesComponent } from './pages/admin/employer/components/create-vacancies/create-vacancies.component';
import { MyVacanciesComponent } from './pages/admin/employer/components/my-vacancy.component.ts/my-vacancies.component';
import { ResumeComponent } from './pages/admin/jobseeker/components/profile/resume.component';
import { CreateProfile } from './pages/admin/jobseeker/components/create-profile/create-profile.component';
import { EditProfileComponent } from './pages/admin/jobseeker/components/edit-profile/edit-profile.component';
import { AllVacanciesComponent } from './pages/all-vacancies/all-vacancies.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-vacancy', component: CreateVacanciesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'vacancies', component: AllVacanciesComponent },

  // Админ страница соискателя
  {
    path: 'admin/jobseeker',
    component: AdminComponent,
    children: [
      { path: 'profile', component: ResumeComponent },
      { path: 'create-profile', component: CreateProfile },
      { path: 'edit-profile', component: EditProfileComponent },
    ]
  },

  // Админ страница работодателя
  {
    path: 'admin/employer',
    component: AdminComponent, 
    children: [
      { path: 'my-vacancies', component: MyVacanciesComponent },
      { path: 'edit-vacancy/:id', component: EditVacancyComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
