import { Component, OnInit } from '@angular/core';
import { MockVacancyService } from '../../../../../core/services/mock-vacancy.service';
import { AuthService } from '../../../../../core/services/auth2.service';
import { Router } from '@angular/router';
import { Vacancy } from '../../../../../core/models/types.models';

@Component({
  selector: 'app-my-vacancies',
  standalone: false,
  template: `
    <div class="container mx-auto py-28 px-8">
      <header class="flex justify-between items-center py-8 mb-10">
        <h1 class="text-4xl font-serif text-black tracking-tight">Мои вакансии</h1>
        <button routerLink="/create-vacancy" class="px-6 py-3 bg-blue-500 text-white text-lg rounded-full hover:scale-105 transform transition duration-300">Добавить вакансию</button>
      </header>

      <div *ngIf="vacancies.length === 0" class="text-center text-gray-600 mb-8">
        <p class="text-xl">У вас нет вакансий. Добавьте первую!</p>
      </div>

      <section class="text-gray-900">
        <div *ngFor="let vacancy of vacancies" class="mb-12">
          <h2 class="text-2xl font-serif font-semibold mb-3">{{ vacancy.position }}</h2>
          <p class="text-lg mb-2">Компания: <span class="font-semibold">{{ vacancy.companyInfo }}</span></p>
          <p class="text-lg mb-2">Отрасль: <span class="font-semibold">{{ vacancy.industry }}</span></p>
          <p class="text-sm text-gray-600 mb-4">Дата размещения: {{ vacancy.datePosted | date }}</p>
          <p class="text-lg leading-relaxed mb-4">{{ vacancy.description }}</p>
          <p class="text-lg mb-2">Локация: <span class="font-semibold">{{ vacancy.location }}</span></p>
          <p class="text-lg mb-2">Требуемые навыки: <span class="font-semibold">{{ vacancy.skills }}</span></p>
          <p class="text-lg mb-2">Вид занятости: <span class="font-semibold">{{ vacancy.employmentType }}</span></p>
          <p class="text-lg mb-4">Оклад: <span class="font-semibold">{{ vacancy.salary | currency }}</span></p>
          
          <div class="flex gap-6">
            <button (click)="editVacancy(vacancy)" class="px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-md hover:bg-blue-600 transform transition duration-300">Редактировать</button>
            <button (click)="confirmDeleteVacancy(vacancy)" class="px-6 py-3 bg-red-500 text-white font-bold text-lg rounded-md hover:bg-red-600 transform transition duration-300">Удалить</button>
          </div>
        </div>
      </section>
    </div>

    <!-- Модальное окно для удаления -->
    <div *ngIf="showModal" class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <p class="text-lg font-serif font-semibold text-black mb-6">Вы уверены, что хотите удалить вакансию?</p>
        <div class="flex justify-between gap-6">
          <button (click)="confirmDelete()" class="px-6 py-3 bg-red-600 text-white font-bold text-lg rounded-md hover:bg-orange-700 transform transition duration-300">Удалить</button>
          <button (click)="cancelDelete()" class="px-6 py-3 bg-gray-500 text-white font-bold text-lg rounded-md hover:bg-gray-600 transform transition duration-300">Отмена</button>
        </div>
      </div>
    </div>
  `,
})
export class MyVacanciesComponent implements OnInit {
  vacancies: Vacancy[] = [];
  currentUser: any;
  showModal: boolean = false;
  vacancyToDelete: number | null = null;

  constructor(
    private vacancyService: MockVacancyService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      if (this.currentUser) {
        this.loadVacancies();
      }
    });
  }

  loadVacancies() {
    if (!this.currentUser || this.currentUser.type !== 'employer') {
      console.log('Вы не работодатель');
      return;
    }

    this.vacancyService.getVacanciesByEmployer(this.currentUser.id).subscribe(vacancies => {
      this.vacancies = vacancies;
      console.log('Загруженные вакансии:', this.vacancies);
    });
  }

  editVacancy(vacancy: Vacancy) {
    if (vacancy && typeof vacancy.id === 'number') {
      this.router.navigate(['/admin/employer/edit-vacancy', vacancy.id], {
        state: { vacancy }
      });
    } else {
      console.error('Вакансия не найдена или id не является числом');
    }
  }

  confirmDeleteVacancy(vacancy: Vacancy) {
    if (vacancy && typeof vacancy.id === 'number') {
      this.vacancyToDelete = vacancy.id;
      this.showModal = true;
    } else {
      console.error('Невалидный id вакансии');
    }
  }

  cancelDelete() {
    this.showModal = false;
    this.vacancyToDelete = null;
  }

  confirmDelete() {
    if (this.vacancyToDelete !== null) {
      this.deleteVacancy(this.vacancyToDelete);
    }
  }

  deleteVacancy(vacancyId: number) {
    this.vacancyService.deleteVacancy(vacancyId).subscribe(() => {
      this.loadVacancies();
      this.showModal = false;
      this.vacancyToDelete = null;
    });
  }
}



