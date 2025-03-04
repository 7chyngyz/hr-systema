import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  template: `
  <section class="flex flex-col pt-[200px] gap-7 items-center bg-slate-200 h-screen">
    <div *ngIf="!role">
      <div class="flex flex-col gap-7 mb-3">
        <h1 class="text-[32px] font-bold">Создайте аккаунт</h1>
        <p class="text-[17px] font-medium">Выберите роль:</p>
      </div>
      <div class="flex gap-5">
        <button (click)="selectRole('jobseeker')" class="w-[200px] text-[17px] active:bg-blue-500 font-medium h-[59px] bg-white rounded-lg">
          Я соискатель
        </button>
        <button (click)="selectRole('employer')" class="w-[200px] text-[17px] active:bg-blue-500 font-medium h-[59px] bg-white rounded-lg">
          Я работодатель
        </button>
      </div>
      <div class="flex items-center justify-center mt-5 gap-1">
        <span class="opacity-[0.7] text-[17px]">У вас уже есть аккаунт?</span>
        <a class="text-[17px] font-medium" routerLink="/login">Войти</a>
      </div>
    </div>

    <div *ngIf="role === 'jobseeker'" class="flex flex-col gap-7 justify-center items-center bg-slate-200">
      <h2 class="font-bold text-[32px]">Создайте аккаунт (Соискатель)</h2>
      <div class="flex flex-col gap-5">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="text" placeholder="Имя" [(ngModel)]="firstName">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="text" placeholder="Фамилия" [(ngModel)]="lastName">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="email" placeholder="Электронная почта" [(ngModel)]="email">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="password" placeholder="Пароль" [(ngModel)]="password">
        <button (click)="register()" class="w-[419px] h-[59px] rounded-full text-white font-medium p-4 text-[18px] bg-blue-600">Создать аккаунт</button>
      </div>
    </div>

    <div *ngIf="role === 'employer'" class="flex flex-col gap-7 justify-center items-center bg-slate-200">
      <h2 class="font-bold text-[32px]">Создайте аккаунт (Работодатель)</h2>
      <div class="flex flex-col gap-5">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="text" placeholder="Наименование компании" [(ngModel)]="companyName">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="email" placeholder="Электронная почта" [(ngModel)]="companyEmail">
        <input class="w-[419px] outline-none h-[59px] rounded-lg p-4 text-[17px]" type="password" placeholder="Пароль" [(ngModel)]="companyPassword">
        <button (click)="register()" class="w-[419px] h-[59px] rounded-full text-white font-medium p-4 text-[18px] bg-blue-600">Создать аккаунт</button>
      </div>
    </div>
  </section>
  `,
})
export class RegisterComponent {
  role: 'jobseeker' | 'employer' | null = null;

  firstName = '';
  lastName = '';
  email = '';
  password = '';

  companyName = '';
  companyEmail = '';
  companyPassword = '';

  constructor(private authService: AuthService, private router: Router) {}

  selectRole(selectedRole: 'jobseeker' | 'employer') {
    this.role = selectedRole;
  }

  register() {
    if (!this.role) {
      alert('Выберите роль!');
      return;
    }

    if (this.role === 'jobseeker') {
      this.authService.registerJobSeeker(this.firstName, this.email, this.password);
      this.router.navigate(['/admin/jobseeker']);
    } else {
      this.authService.registerEmployer(this.companyName, this.companyEmail, this.companyPassword);
      this.router.navigate(['/admin/employer']);
    }
  }
}
