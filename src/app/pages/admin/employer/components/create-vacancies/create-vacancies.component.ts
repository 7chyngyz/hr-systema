import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth2.service';
import { MockVacancyService } from '../../../../../core/services/mock-vacancy.service';
import { Vacancy } from '../../../../../core/models/types.models';

@Component({
  selector: 'app-create-list',
  standalone: false,
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Добавление новой вакансии</h2>
          <p *ngIf="userName">{{ userName }}</p>
          <p *ngIf="!userName">Пожалуйста, войдите, чтобы добавить вакансию.</p>
        </div>
        <div>
          <form (ngSubmit)="submitVacancy()" class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
          <p class="text-lg font-semibold">Название компании</p>
            <input [(ngModel)]="vacancy.company" name="company" required placeholder="Название компании" />

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

            <!-- Требуемые навыки -->
            <p class="text-lg font-semibold">Требуемые навыки</p>
            <textarea [(ngModel)]="vacancy.skills" name="skills" class="border border-gray-300 rounded-md p-2" placeholder="Введите навыки, разделенные запятой"></textarea>

            <!-- Вид занятости -->
            <p class="text-lg font-semibold">Вид занятости</p>
            <select [(ngModel)]="vacancy.employmentType" name="employmentType" class="border border-gray-300 rounded-md p-2">
              <option value="full-time">Полная занятость</option>
              <option value="part-time">Частичная занятость</option>
              <option value="freelance">Фриланс</option>
            </select>

            <!-- Требуемый опыт работы -->
            <p class="text-lg font-semibold">Требуемый опыт работы</p>
            <input [(ngModel)]="vacancy.experience" name="experience" type="number" class="border border-gray-300 rounded-md p-2" placeholder="Количество лет" />

            <!-- Оклад -->
            <p class="text-lg font-semibold">Оклад</p>
            <input [(ngModel)]="vacancy.salary" name="salary" type="number" class="border border-gray-300 rounded-md p-2" placeholder="Введите оклад" />

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
    </section>`
})
// В компоненте CreateVacanciesComponent
export class CreateVacanciesComponent implements OnInit {
  userName: string = '';    
  vacancy: Vacancy = {
    id: 0,
    company: '',  // Используем company, а не companyName
    companyInfo: '',
    position: '',
    industry: '',
    description: '',
    location: '',
    skills: '',
    employmentType: 'full-time',
    experience: 0,
    salary: 0,
  };

  constructor(
    private authService: AuthService,
    private vacancyService: MockVacancyService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      if (user && user.type === 'employer') {
        this.userName = user.company || '';  // Используем company вместо companyName
      }
    });
  }

  submitVacancy() {
    console.log('Данные вакансии:', this.vacancy);
  
    if (!this.vacancy.position || !this.vacancy.description || !this.vacancy.location || !this.vacancy.skills || !this.vacancy.experience || !this.vacancy.salary || !this.vacancy.company) {
      alert('Заполните все поля');
      return;
    }
  
    this.authService.currentUser.subscribe(user => {
      if (!user || user.type !== 'employer') {
        console.log('Только работодатели могут размещать вакансии');
        return;
      }
  
      const newVacancy: Vacancy = {
        ...this.vacancy,
        id: Date.now(),
        employerId: user.id,
        datePosted: new Date(),
        company: user.company || '',  // Используем company вместо companyName
      };
  
      // Сохраняем вакансию через сервис
      this.vacancyService.createVacancy(newVacancy).subscribe(response => {
        console.log('Вакансия успешно размещена!', response);
        this.router.navigate(['/admin/employer/my-vacancies']);
      }, error => {
        console.error('Ошибка при добавлении вакансии:', error);
      });
    });
  }   
}




