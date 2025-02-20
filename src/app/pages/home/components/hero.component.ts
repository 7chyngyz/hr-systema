import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  template: `
    <section class="bg-gradient-to-b h-screen from-gray-300 to-white py-[200px]">
      <div class="mx-auto flex flex-col lg:flex-row items-center py-10 px-10 lg:px-60">
        <div class="lg:w-1/2 text-start lg:text-left space-y-6">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight uppercase">
            поиск работы по<br>всему кыргызстану
          </h1>
          <div class="flex items-center bg-white shadow-md rounded-full px-6 py-3 w-full max-w-2xl mx-auto lg:mx-0">
            <svg class="w-7 h-6 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35"></path>
              <circle cx="10" cy="10" r="7"></circle>
            </svg>
            <input type="text" placeholder="Какую работу ищете?" class="w-full h-[27px] px-5 py-4 text-lg focus:outline-none">
            <button class="bg-blue-600 text-white px-6 py-3 text-lg rounded-full font-medium hover:bg-blue-700 transition">
              Поиск
            </button>
          </div>
          <div class="flex flex-wrap gap-2 mt-4">
            <h3 class="text-[16px] text-gray-500">Часто ищут:</h3>
            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Информационные технологии</span>
            <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Бухгалтерия</span>
            <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Искусство, развлечения</span>
            <span class="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Маркетинг и PR</span>
            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Административный персонал</span>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex justify-end relative mt-10 lg:mt-0 lg:ml-[200px]">
          <img src="assets/woman.png" alt="Женщина с ноутбуком" class="w-full max-w-none">
          <div class="absolute top-10 left-7 bg-white shadow-lg p-3 rounded-xl text-sm">
            <span class="font-medium">Здравствуйте!</span>
            <button class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Отправить</button>
          </div>
          <div class="absolute bottom-5 right-[400px] bg-white shadow-lg p-3 rounded-xl text-sm">
            Личный кабинет
          </div>
          <div class="absolute transform rotate-12 bottom-5 right-5 bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg p-3 rounded-xl text-sm w-[150px] h-[220px] flex items-center justify-center text-white">
            <div class="w-full h-full flex flex-col justify-between p-4">
              <div class="flex flex-col items-start gap-7">
                <div class="flex items-center">
                  <div class="w-7 h-7 rounded-full bg-gray-200"></div>
                  <div class="w-7 h-7 rounded-full bg-gray-300"></div>
                </div>
                <span class="text-sm text-gray-200">Абсолютно бесплатный сервис!</span>
              </div>
              <div class="flex justify-between items-end">
                <span class="text-xs">**** 1234</span>
                <span class="text-xs">12/25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {

}
