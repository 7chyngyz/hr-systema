import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  template: `
    <footer class="bg-gray-100 py-20">
      <div class="container flex flex-col items-center">
        <div class="flex gap-20">
          <div class="flex flex-col flex-1 min-w-[170px]">
            <h3 class="text-lg font-bold mb-4 text-black">Контакты</h3>
            <ul class="flex flex-col space-y-2 text-black">
              <li>Кистоногин, г. Бизнес</li>
              <li>ул. Теологула 117/1</li>
              <li>+1980 (708) 11 22 33</li>
            </ul>
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <h3 class="text-lg font-bold mb-4 text-black">Соискателям</h3>
            <ul class="flex flex-col space-y-2 text-black">
              <li>Личный кабинет</li>
              <li>Вязкости</li>
              <li>Работодатели</li>
            </ul>
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <h3 class="text-lg font-bold mb-4 text-black">Работодателям</h3>
            <ul class="flex flex-col space-y-2 text-black">
              <li>Личный кабинет</li>
              <li>Опубликовать вызовом</li>
              <li>Квадрати</li>
            </ul>
          </div>
          <div class="flex flex-col flex-1 min-w-[150px]">
            <h3 class="text-lg font-bold mb-4 text-black">Меню</h3>
            <ul class="flex flex-col space-y-2 text-black">
              <li>Выявление</li>
              <li>FAQ</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div class="flex flex-col flex-1 min-w-[250px]">
            <h3 class="text-lg font-bold mb-4 text-black">Поддержка</h3>
            <ul class="flex flex-col space-y-2 text-black">
              <li>Приемка размещения велосипед</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
        <div class="flex flex-col items-start w-full">
          <h3 class="text-lg font-bold mb-4 text-black">Оставить заявку</h3>
          <form class="flex flex-col items-center space-y-4 w-full max-w-sm">
            <input type="text" placeholder="Ваше имя" class="w-[300px] p-2 rounded text-white flex">
            <input type="text" placeholder="Ваш номер телефона" class="w-[300px] p-2 rounded text-white flex">
            <textarea placeholder="Сообщение" class="w-[300px] p-2 rounded text-white flex"></textarea>
            <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-[20px] hover:bg-blue-600 transition duration-300 flex">
              Отправить
            </button>
          </form>
        </div>
        </div>
        <!-- <div class="mt-12 text-center text-black flex">
          © 2024 Скандализация. All Rights Reserved.
        </div> -->
      </div>
    </footer>
  `,
})
export class FooterComponent {}
