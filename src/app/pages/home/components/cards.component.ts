import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: false,
  template: `
  <section class="min-h-screen flex items-center justify-center p-4">
    <div class="max-w-7xl mx-auto rounded-lg overflow-hidden">
      <div class="flex flex-col md:flex-row gap-7">
        <div class="w-full md:w-1/2 flex px-16 py-16 h-[327px] bg-blue-700">
          <div class="flex flex-col">
            <h2 class="text-3xl font-bold text-white mb-4">Работодатель</h2>
            <p class="text-white text-lg mb-6">Ищете в свою команду новых людей?</p>
            <button class="bg-white text-lg text-black px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
              Зарегистрироваться
            </button>
          </div>
          <div class="flex items-center justify-center">
            <img class="w-full max-w-[250px] object-contain" src="assets/man1.png" alt="Работодатель">
          </div>
        </div>
        <div class="w-full md:w-1/2 flex px-16 py-16 h-[327px] bg-green-300">
          <div class="flex flex-col">
            <h2 class="text-3xl font-bold text-white mb-4">Соискатель</h2>
            <p class="text-white text-lg mb-6">Ищете достойную работу?</p>
            <button class="bg-white text-lg text-black px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
              Зарегистрироваться
            </button>
          </div>
          <div class="flex items-center justify-center">
            <img class="w-full max-w-[650px] object-contain" src="assets/man2.png" alt="Соискатель">
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class CardsComponent {}
