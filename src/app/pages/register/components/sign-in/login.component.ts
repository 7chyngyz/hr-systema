import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth2.service';

@Component({
  selector: 'app-login',
  standalone: false,
  template: `
  <section class="flex flex-col gap-7 justify-center items-center bg-slate-200 h-screen">
    <div class="flex flex-col gap-4">
        <h2 class="font-bold text-[32px]">Войти</h2>
        <p class="text-lg">С возвращением! Пожалуйста, введите свои данные</p>
    </div>
    <div class="flex flex-col gap-5">
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" 
               type="email" 
               [(ngModel)]="email" 
               placeholder="Электронная почта" required>
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" 
               type="password" 
               [(ngModel)]="password" 
               placeholder="Введите пароль" required>
        <a class="flex justify-end opacity-[0.7] cursor-pointer" routerLink="/reset-password">Забыли пароль?</a>
        <button class="w-[419px] h-[59px] rounded-full text-white font-medium p-4 text-[18px] bg-blue-600" 
                (click)="onLogin()">
          Войти
        </button>
        <button class="w-[419px] h-[59px] rounded-full text-gray-800 font-medium p-4 text-[18px] bg-white border border-gray-400">
          Продолжить с Google
        </button>
        <button class="w-[419px] h-[59px] rounded-full text-gray-800 font-medium p-4 text-[18px] bg-white border border-gray-400">
          Продолжить с LinkedIn
        </button>
    </div>
    <p *ngIf="loginError" class="text-red-500 mt-4">Ошибка входа: Неверный email или пароль</p>
  </section>
  `,
})
export class LoginComponent {
  email: string = ''; 
  password: string = ''; 
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    
    const isLoggedIn = this.authService.login(this.email, this.password);
    if (isLoggedIn) {
      console.log('Login successful, navigating to dashboard');
      this.router.navigate(['/']);
    } else {
      console.error('Login failed');
    }    
  }
}
