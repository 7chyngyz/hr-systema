import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
  <header class="w-full bg-white py-6">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-20">
        <h1 routerLink="/" class="cursor-pointer text-[23px] font-bold text-gray-700">Border</h1>
        <span class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">Вакансии</span>
        <span class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">FAQ</span>
        <span class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">Контакты</span>
        </div>
        <div class="flex items-center gap-7">
          <button routerLink="/role" routerLinkActive="router-link-active"  class="bg-gray-200 w-[157px] h-[52px] text-[16px] font-medium rounded-full">Войти</button>
          <button routerLink="/role" routerLinkActive="router-link-active" class="bg-blue-500 w-[186px] text-white text-[16px] font-medium h-[52px] rounded-full flex items-center justify-center">
            Регистрация
          </button>
        </div>
      </div>
    </div>
  </header>
  <router-outlet></router-outlet>
  `,
})
export class HeaderComponent {

}
