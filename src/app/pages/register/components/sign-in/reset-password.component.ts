import { Component } from '@angular/core';

@Component({
  selector: 'app-employer-reset-password',
  standalone: false,
  template: `
  <section class="flex flex-col gap-7 justify-center items-center bg-slate-200 h-screen">
    <div class="flex flex-col gap-4">
        <h2 class="font-bold text-[32px]">Забыли пароль?</h2>
        <p class="text-lg">Пожалуйста, подтвердите свой адрес электронной <br> почты ниже, и мы вышлем вам проверочный код</p>
    </div>
    <div class="flex flex-col gap-5">
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" type="text" placeholder="Электронная почта">
        <button class="w-[419px] h-[59px] rounded-full text-white font-medium p-4 text-[18px] bg-blue-600">Продолжить</button>
        <button class="w-[419px] h-[59px] rounded-full text-gray-800 font-medium p-4 text-[18px] bg-white border border-gray-400">
          Продолжить с Google
        </button>
        <button class="w-[419px] h-[59px] rounded-full text-gray-800 font-medium p-4 text-[18px] bg-white border border-gray-400">
          Продолжить с LinkedIn
        </button>
    </div>
  </section>
  `,
})
export class ResetPasswordComponent {}
