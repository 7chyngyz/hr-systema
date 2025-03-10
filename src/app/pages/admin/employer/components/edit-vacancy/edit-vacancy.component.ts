import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MockVacancyService } from '../../../../../core/services/mock-vacancy.service'; // Убедитесь, что путь правильный

@Component({
  selector: 'app-edit-vacancy',
  standalone: false,
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Редактирование вакансии</h2>
        </div>
        <div>
          <form (ngSubmit)="submitVacancy()" class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
            <p class="text-lg font-semibold">О компании</p>
            <textarea [(ngModel)]="vacancy.companyInfo" name="companyInfo" class="border border-gray-300 rounded-md p-2" placeholder="Введите текст"></textarea>

            <p class="text-lg font-semibold">Позиция</p>
            <input [(ngModel)]="vacancy.position" name="position" type="text" class="border border-gray-300 rounded-md p-2" placeholder="Выберите" />

            <p class="text-lg font-semibold">Отрасль</p>
            <input [(ngModel)]="vacancy.industry" name="industry" type="text" class="border border-gray-300 rounded-md p-2" placeholder="Выберите" />

            <p class="text-lg font-semibold">Описание вакансии</p>
            <textarea [(ngModel)]="vacancy.description" name="description" class="border border-gray-300 rounded-md p-2" placeholder="Напишите описание вакансии"></textarea>

            <p class="text-lg font-semibold">Локация</p>
            <input [(ngModel)]="vacancy.location" name="location" type="text" class="border border-gray-300 rounded-md p-2" placeholder="Введите локацию" />

            <p class="text-lg font-semibold">Требуемые навыки</p>
            <textarea [(ngModel)]="vacancy.skills" name="skills" class="border border-gray-300 rounded-md p-2" placeholder="Введите навыки, разделенные запятой"></textarea>

            <p class="text-lg font-semibold">Вид занятости</p>
            <select [(ngModel)]="vacancy.employmentType" name="employmentType" class="border border-gray-300 rounded-md p-2">
              <option value="full-time">Полная занятость</option>
              <option value="part-time">Частичная занятость</option>
              <option value="freelance">Фриланс</option>
            </select>

            <p class="text-lg font-semibold">Требуемый опыт работы</p>
            <input [(ngModel)]="vacancy.experience" name="experience" type="number" class="border border-gray-300 rounded-md p-2" placeholder="Количество лет" />

            <p class="text-lg font-semibold">Оклад</p>
            <input [(ngModel)]="vacancy.salary" name="salary" type="number" class="border border-gray-300 rounded-md p-2" placeholder="Введите оклад" />

            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Сохранить изменения
            </button>
          </form>
        </div>
      </div>
    </section>
  `
})
export class EditVacancyComponent implements OnInit {
  vacancy: any = {};  // Здесь можно использовать интерфейс для вакансии, если он есть

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vacancyService: MockVacancyService  // Инжектируем ваш сервис
  ) {}

  ngOnInit() {
    const state = history.state;
    console.log(state); // Проверяем, что данные приходят
    if (state && state.vacancy) {
      this.vacancy = { ...state.vacancy };
      console.log(this.vacancy); // Выводим вакансию в консоль
    } else {
      this.router.navigate(['/my-vacancies']);
    }
  }

  submitVacancy() {
    if (this.vacancy) {
      this.vacancyService.updateVacancy(this.vacancy.id, this.vacancy).subscribe({
        next: (response: any) => { // Явная типизация ответа
          if (response && response.success) {
            console.log('Вакансия обновлена');
            this.router.navigate(['/my-vacancies']);  // После обновления перенаправляем на список вакансий
          } else {
            console.error('Ошибка при обновлении вакансии');
          }
        },
        error: (error: any) => { // Явная типизация ошибки
          console.error('Ошибка при обновлении вакансии:', error);
        }
      });
    }
  }
}
