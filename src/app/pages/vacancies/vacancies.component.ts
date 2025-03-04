import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-list',
  imports: [CommonModule], 
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Добавление новой вакансии</h2>
          <p *ngIf="userName">{{ userName }}</p>
          <p *ngIf="!userName">Пожалуйста, войдите, чтобы добавить вакансию.</p>
        </div>
        <div>
        <form class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
            <p class="text-lg font-semibold">О компании</p>
            <textarea class="border border-gray-300 rounded-md p-2" placeholder="Введите текст"></textarea>

            <p class="text-lg font-semibold">Позиция</p>
            <input type="text" class="border border-gray-300 rounded-md p-2" placeholder="Выберите" />

            <p class="text-lg font-semibold">Отрасль</p>
            <input type="text" class="border border-gray-300 rounded-md p-2" placeholder="Выберите" />

            <p class="text-lg font-semibold">Описание к вакансии</p>
            <textarea class="border border-gray-300 rounded-md p-2" placeholder="Напишите описание вакансии"></textarea>

            <p class="text-lg font-semibold">Требуемые навыки</p>
            <textarea class="border border-gray-300 rounded-md p-2" placeholder="Напишите требуемые навыки к вакансии"></textarea>

            <p class="text-lg font-semibold">Оклад</p>
            <div class="flex gap-4">
              <select class="border border-gray-300 rounded-md p-2">
                <option>Фиксированная</option>
                <option>Процентная</option>
                <option>Валовая прибыль</option>
                <option>Другое</option>
              </select>
              <input type="text" class="border border-gray-300 rounded-md p-2" placeholder="Введите оклад" />
              <select class="border border-gray-300 rounded-md p-2">
                <option>Сом</option>
                <option>Рубль</option>
                <option>Доллар</option>
                <option>Евро</option>
              </select>
            </div>

            <p class="text-lg font-semibold">Вид занятости</p>
            <select class="border border-gray-300 rounded-md p-2">
              <option>Полная занятость</option>
              <option>Частичная занятость</option>
              <option>Совместная работа</option>
              <option>Временная работа</option>
              <option>Проектная работа</option>
              <option>Индивидуальное предприятие</option>
              <option>Инвестиционное предприятие</option>
              <option>Корпоративное предприятие</option>
              <option>Стажировка</option>
              <option>Студент</option>
              <option>Специалист</option>
              <option>Студентка</option>
              <option>Переводчик</option>
            </select>

            <p class="text-lg font-semibold">Опыт работы/стаж</p>
            <div class="flex flex-col gap-2">
              <label class="flex items-center gap-2">
                <input type="radio" name="experience" />
                Не имеет значения
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="experience" />
                Без опыта
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="experience" />
                От 1 до 3 лет
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="experience" />
                От 3 до 6 лет
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="experience" />
                Более 6 лет
              </label>
            </div>

            <p class="text-lg font-semibold">Контактная информация</p>
            <div class="flex flex-col gap-2">
              <select class="border border-gray-300 rounded-md p-2">
                <option>Кыргызстан</option>
                <option>Армения</option>
                <option>Белоруссия</option>
                <option>Казахстан</option>
                <option>Латвия</option>
                <option>Литва</option>
                <option>Молдавия</option>
                <option>Монголия</option>
                <option>Норвегия</option>
                <option>Польша</option>
              </select>
              <textarea class="border border-gray-300 rounded-md p-2" placeholder="Введите название города"></textarea>
              <textarea class="border border-gray-300 rounded-md p-2" placeholder="Введите название улицы"></textarea>
            </div>

            <p class="text-lg font-semibold">Дополнительная информация</p>
            <textarea class="border border-gray-300 rounded-md p-2" placeholder="Напишите дополнительную информацию"></textarea>

            <div class="flex gap-4">
              <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                Разместить вакансию
              </button>
              <button type="button" class="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition">
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class VacanciesComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      if (user && user.type === 'employer') {
        this.userName = user.companyName || '';
      } else {
      }
    });
  }
}
