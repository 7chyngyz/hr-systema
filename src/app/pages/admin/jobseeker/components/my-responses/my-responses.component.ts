import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ResponsesService } from "../../../../../core/services/pesponses.service";
import { VacancyResponse } from "../../../../../core/models/types.models";

@Component({
  selector: 'app-my-responses',
  standalone: false,
  template: `
    <div class="container mx-auto py-28 px-8">
      <header class="flex justify-between items-center py-8 mb-10">
        <h1 class="text-4xl font-serif text-black tracking-tight">Мои отклики</h1>
      </header>

      <div *ngIf="responses.length === 0" class="text-center text-gray-600 mb-8">
        <p class="text-xl">Вы еще не откликнулись ни на одну вакансию!</p>
      </div>

      <section class="text-gray-900">
        <div 
          *ngFor="let response of responses" 
          class="flex items-center h-[200px] bg-gray-100 p-4 rounded-lg shadow-md mb-8 cursor-pointer transition hover:bg-gray-200"
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
export class MyResponsesComponent implements OnInit {
  responses: VacancyResponse[] = [];

  constructor(private responseService: ResponsesService, private router: Router) {}

  ngOnInit() {
    this.responseService.responses$.subscribe((responses) => {
      this.responses = responses; 
    });

    this.loadMyResponses();
  }

  loadMyResponses() {
    this.responseService.getMyResponses().subscribe((responses) => {
      this.responses = responses;
    });
  }
}
