import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.components';
import { LoginComponent } from './pages/register/components/sign-in/login.component';
import { ResetPasswordComponent } from './pages/register/components/sign-in/reset-password.component';
import { RegisterComponent } from './pages/register/components/sign-up/register.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { JobSeekerProfileComponent } from './pages/admin/jobseeker/jobSeeker-admin.component';
import { SkillsComponent } from './pages/admin/jobseeker/profile/prof-skills/skills.component';
import { PersonalInfoComponent } from './pages/admin/jobseeker/profile/personal-info/personal-info.component';
import { ProfileComponent } from './pages/admin/jobseeker/profile/profile.component';
import { ResumeComponent } from './pages/admin/jobseeker/resume.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-vacancy', component: VacanciesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },

  // Роутинг для Job Seeker Profile
  {
    path: 'admin/jobseeker', component: JobSeekerProfileComponent,
    children: [
      { path: '', redirectTo: 'resume', pathMatch: 'full' },
      { path: 'resume', component: ResumeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'vacancies', component: VacanciesComponent }, // Страница вакансий
      { path: 'applications', component: ProfileComponent }, // Страница откликов, используем тот же компонент
    ]
  },

  // Роутинг для создания профиля
  {
    path: 'create', component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'skills', component: SkillsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
