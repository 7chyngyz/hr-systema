import { Component, OnInit } from "@angular/core";
import { Vacancy } from "../../core/models/types.models";
import { MockVacancyService } from "../../core/services/mock-vacancy.service";

@Component({
  selector: 'app-all-vacancies',
  standalone: false,
  template: `
    <div class="container mx-auto py-28 px-8">
      <header class="flex justify-between items-center py-8 mb-10">
        <h1 class="text-4xl font-serif text-black tracking-tight">Все вакансии</h1>
      </header>

      <div *ngIf="vacancies.length === 0" class="text-center text-gray-600 mb-8">
        <p class="text-xl">Вакансий пока нет. Добавьте первую!</p>
      </div>

      <section class="text-gray-900">
        <div *ngFor="let vacancy of vacancies" class="flex items-center h-[200px] bg-gray-100 p-4 rounded-lg shadow-md mb-8">
          <!-- <img src="{{ vacancy.companyLogo }}" alt="{{ vacancy.company }}" class="w-12 h-12 rounded-full mr-4"> -->
          <div class="flex gap-36 w-full">
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Компания</span>
              <h3 class="text-lg">{{ vacancy.company }}</h3>
              <p class="text-lg opacity-[0.6]">Бишкек, Кыргызстан</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Позиция</span>
              <h3 class="text-lg">{{ vacancy.position }}</h3>
              <p class="text-lg opacity-[0.6]">Информационные технологии</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Оклад</span>
              <h3 class="text-lg">{{ vacancy.salary | currency }}</h3>
              <p class="text-lg opacity-[0.6]">Полная занятость</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Опыт работы</span>
              <h3 class="text-lg">{{ vacancy.experience }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AllVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: MockVacancyService) {}

  ngOnInit() {
    this.loadAllVacancies();
  }

  loadAllVacancies() {
    this.vacancyService.getAllVacancies().subscribe(vacancies => {
      this.vacancies = vacancies;
    });
  }
}
