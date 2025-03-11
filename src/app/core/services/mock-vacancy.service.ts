import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vacancy } from '../models/types.models';

@Injectable({
  providedIn: 'root',
})
export class MockVacancyService {
  private vacanciesKey = 'vacancies';  

  
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  
  getAllVacancies(): Observable<Vacancy[]> {
    if (!this.isBrowser()) {
      return of([]);  
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    return of(vacancies);  
  }

  getVacanciesByEmployer(employerId: number): Observable<Vacancy[]> {
    if (!this.isBrowser()) {
      return of([]);  
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    return of(vacancies.filter((vacancy: Vacancy) => vacancy.employerId === employerId));  
  }

  getVacancyById(id: number): Observable<Vacancy | null> {
    if (!this.isBrowser()) return of(null);
  
    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    const vacancy = vacancies.find((v: Vacancy) => v.id === id) || null;
    return of(vacancy);
  }  

  deleteVacancy(vacancyId: number): Observable<void> {
    if (!this.isBrowser()) {
      return of();  
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    const updatedVacancies = vacancies.filter((vacancy: Vacancy) => vacancy.id !== vacancyId);
    localStorage.setItem(this.vacanciesKey, JSON.stringify(updatedVacancies));
    return of();  
  }

  createVacancy(newVacancy: Vacancy): Observable<Vacancy> {
    if (!this.isBrowser()) {
      return of(newVacancy);  
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    vacancies.push(newVacancy);
    localStorage.setItem(this.vacanciesKey, JSON.stringify(vacancies));
    return of(newVacancy);
  }

  updateVacancy(vacancyId: number, updatedVacancy: Vacancy): Observable<Vacancy | null> {
    if (!this.isBrowser()) {
      return of(null);  
    }

    const vacancies = JSON.parse(localStorage.getItem(this.vacanciesKey) || '[]');
    const index = vacancies.findIndex((vacancy: Vacancy) => vacancy.id === vacancyId); 

    if (index !== -1) {
      
      vacancies[index] = { ...vacancies[index], ...updatedVacancy };
      localStorage.setItem(this.vacanciesKey, JSON.stringify(vacancies));
      return of(vacancies[index]);  
    }

    return of(null);  
  }
}
