import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vacancy } from '../models/types.models';

@Injectable({
  providedIn: 'root',
})
export class MockVacancyService {
  private vacanciesKey = 'vacancies';  // Название ключа для хранения вакансий в localStorage

  // Проверка на наличие localStorage (только в браузере)
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Получение всех вакансий из localStorage
  getAllVacancies(): Observable<Vacancy[]> {
    if (!this.isBrowser()) {
      return of([]);  // Возвращаем пустой массив, если не в браузере
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    return of(vacancies);  // Возвращаем все вакансии
  }

  // Получение вакансий только для определенного работодателя
  getVacanciesByEmployer(employerId: number): Observable<Vacancy[]> {
    if (!this.isBrowser()) {
      return of([]);  // Возвращаем пустой массив, если не в браузере
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    return of(vacancies.filter((vacancy: Vacancy) => vacancy.employerId === employerId));  // Фильтруем вакансии по employerId
  }

  // Метод для удаления вакансии
  deleteVacancy(vacancyId: number): Observable<void> {
    if (!this.isBrowser()) {
      return of();  // Возвращаем пустой Observable, если не в браузере
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    const updatedVacancies = vacancies.filter((vacancy: Vacancy) => vacancy.id !== vacancyId);  // Убираем вакансию с таким id
    localStorage.setItem(this.vacanciesKey, JSON.stringify(updatedVacancies));
    return of();  // Просто возвращаем пустой Observable
  }

  // Метод для создания новой вакансии
  createVacancy(newVacancy: Vacancy): Observable<Vacancy> {
    if (!this.isBrowser()) {
      return of(newVacancy);  // Возвращаем переданную вакансию, если не в браузере
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    vacancies.push(newVacancy);
    localStorage.setItem(this.vacanciesKey, JSON.stringify(vacancies));
    return of(newVacancy);
  }

  // Метод для обновления вакансии
  updateVacancy(vacancyId: number, updatedVacancy: Vacancy): Observable<Vacancy | null> {
    if (!this.isBrowser()) {
      return of(null);  // Возвращаем null, если не в браузере
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    const index = vacancies.findIndex((vacancy: Vacancy) => vacancy.id === vacancyId);  // Ищем индекс вакансии по id

    if (index !== -1) {
      // Если вакансия найдена, обновляем ее
      vacancies[index] = { ...vacancies[index], ...updatedVacancy };
      localStorage.setItem(this.vacanciesKey, JSON.stringify(vacancies));
      return of(vacancies[index]);  // Возвращаем обновленную вакансию
    }

    return of(null);  // Если вакансия не найдена
  }
}
