import { Component } from '@angular/core';

@Component({
  selector: 'app-employer-register',
  standalone: false,
  template: `
  <section class="flex flex-col gap-7 justify-center items-center bg-slate-200 h-screen">
    <div class="flex flex-col gap-4">
        <h2 class="font-bold text-[32px]">Создайте аккаунт</h2>
        <p class="text-lg">Кто вы?</p>
    </div>
    <div class="flex flex-col gap-5">
        <div class="flex gap-3">
            <input class="w-[20px]" type="radio" placeholder="Я соискатель">
            <p class="text-lg">Я соискатель</p>
            <input class="w-[20px]" type="radio" placeholder="Я работодатель">
            <p class="text-lg">Я работодатель</p>
        </div>
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" type="text" placeholder="Наименование компании">
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" type="text" placeholder="Электронная почта">
        <input class="w-[419px] h-[59px] outline-none rounded-lg p-4 text-[17px]" type="text" placeholder="Пароль">
        <button class="w-[419px] h-[59px] rounded-full text-white font-medium p-4 text-[18px] bg-blue-600">Создать аккаунт</button>
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
export class EmployerRegisterComponent {}
