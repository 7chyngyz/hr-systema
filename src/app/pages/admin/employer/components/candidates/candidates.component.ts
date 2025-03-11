import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacancyResponse } from '../../../../../core/models/types.models';
import { ResponsesService } from '../../../../../core/services/pesponses.service';

@Component({
  selector: 'app-candidates',
  standalone: false,
  template: `
    <div class="container mx-auto py-28 px-8">
      <header class="py-8 mb-10">
        <h1 class="text-4xl font-serif text-black tracking-tight">Отклики на вашу вакансию</h1>
      </header>

      <div *ngIf="responses.length === 0" class="text-center text-gray-600 mb-8">
        <p class="text-xl">Пока нет откликов на вашу вакансию.</p>
      </div>

      <section class="text-gray-900">
        <div 
          *ngFor="let response of responses" 
          class="flex items-center h-[200px] bg-gray-100 p-4 rounded-lg shadow-md mb-8"
        >
          <img src="{{ response.companyLogo }}" alt="{{ response.company }}" class="w-12 h-12 rounded-full mr-4">
          <div class="flex gap-36 w-full">
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Компания</span>
              <h3 class="text-lg">{{ response.company }}</h3>
              <p class="text-lg">Бишкек, Кыргызстан</p>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Позиция</span>
              <h3 class="text-lg">{{ response.position }}</h3>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Отрасль</span>
              <h3 class="text-lg">{{ response.industry }}</h3>
            </div>
            <div class="flex flex-col gap-3">
              <span class="text-lg opacity-[0.6]">Дата заявки</span>
              <h3 class="text-lg">{{ response.applicationDate | date }}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class CandidatesComponent implements OnInit {
  responses: VacancyResponse[] = [];
  vacancyId: number | null = null;

  constructor(
    private responsesService: ResponsesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Получаем идентификатор вакансии из параметров маршрута
    this.vacancyId = +this.route.snapshot.paramMap.get('vacancyId')!;
    if (this.vacancyId) {
      this.loadResponses();
    }
  }

  loadResponses() {
    if (this.vacancyId !== null) {
      this.responsesService.getResponsesForEmployer(this.vacancyId).subscribe((responses) => {
        this.responses = responses;
      });
    }
  }
}
