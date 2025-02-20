import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  template: `
    <section class="flex flex-col pt-[200px] gap-7 items-center bg-slate-200 h-screen">
      <div>
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
    </section>
    <router-outlet></router-outlet>
  `,
})
export class RoleComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    localStorage.setItem('role', role);

    if (role === 'jobseeker') {
      this.router.navigate(['/register/jobseeker']);
    } else if (role === 'employer') {
      this.router.navigate(['/register/employer']);
    }
  }
}
