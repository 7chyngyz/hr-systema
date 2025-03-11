import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacancy, VacancyResponse } from '../../../core/models/types.models';
import { MockVacancyService } from '../../../core/services/mock-vacancy.service';
import { ResponsesService } from '../../../core/services/pesponses.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacancy-detail',
  standalone: false,
  template: `
    <div class="container mx-auto py-28 px-8">
      <button (click)="goBack()" class="mb-6 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Назад</button>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-3xl font-bold mb-4">{{ vacancy?.position }}</h1>
        <p class="text-lg text-gray-600 mb-2">Компания: <span class="font-semibold">{{ vacancy?.companyInfo }}</span></p>
        <p class="text-lg text-gray-600 mb-2">Отрасль: <span class="font-semibold">{{ vacancy?.industry }}</span></p>
        <p class="text-sm text-gray-500 mb-4">Дата размещения: {{ vacancy?.datePosted | date }}</p>
        <p class="text-lg mb-4">{{ vacancy?.description }}</p>
        <p class="text-lg mb-2">Локация: <span class="font-semibold">{{ vacancy?.location }}</span></p>
        <p class="text-lg mb-2">Требуемые навыки: <span class="font-semibold">{{ vacancy?.skills }}</span></p>
        <p class="text-lg mb-2">Вид занятости: <span class="font-semibold">{{ vacancy?.employmentType }}</span></p>
        <p class="text-lg mb-4">Оклад: <span class="font-semibold">{{ vacancy?.salary | currency }}</span></p>

        <button (click)="applyForJob()" class="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
          Откликнуться
        </button>
      </div>
    </div>
  `,
})
export class VacancyDetailComponent implements OnInit {
  vacancy: Vacancy | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vacancyService: MockVacancyService,
    private responsesService: ResponsesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.vacancyService.getVacancyById(+id).subscribe((vacancy: Vacancy | null) => {
        this.vacancy = vacancy;
      });
    }
  }

  goBack() {
    this.router.navigate(['/vacancies']);
  }

  applyForJob() {
    if (this.vacancy) {
      const response: VacancyResponse = {
        vacancyId: this.vacancy.id, // Присваиваем идентификатор вакансии
        candidateName: 'Иван Иванов', // Пример имени кандидата
        candidateEmail: 'ivanov@example.com', // Пример email кандидата
        status: 'pending', // Статус отклика
        applicationDate: new Date().toISOString(),
        companyLogo: this.vacancy.companyLogo || '',  // В случае отсутствия логотипа компании можно поставить пустую строку
        id: this.vacancy.id,
        company: this.vacancy.company,
        position: this.vacancy.position,
        industry: this.vacancy.industry,
      };
  
      this.responsesService.addResponse(response);
      alert('Вы успешно откликнулись на вакансию!');
    }
  }
}  
