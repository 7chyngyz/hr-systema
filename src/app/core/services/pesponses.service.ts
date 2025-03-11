import { BehaviorSubject, Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { VacancyResponse } from "../models/types.models";

@Injectable({
  providedIn: 'root',
})
export class ResponsesService {
  private responsesKey = 'responses';

  private responses = new BehaviorSubject<VacancyResponse[]>([]); 
  responses$ = this.responses.asObservable();

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Добавление отклика
  addResponse(vacancy: VacancyResponse) {
    const currentResponses = this.responses.value;
    const updatedResponses = [...currentResponses, vacancy];
    this.responses.next(updatedResponses);
  
    if (this.isBrowser()) {
      localStorage.setItem(this.responsesKey, JSON.stringify(updatedResponses));
    }
  }
  

  // Получение всех откликов соискателя (общие отклики)
  getMyResponses(): Observable<VacancyResponse[]> {
    if (!this.isBrowser()) {
      return of([]);  
    }

    const responses = JSON.parse(localStorage.getItem(this.responsesKey) || '[]');
    this.responses.next(responses);  
    return of(responses);  
  }

  // Обновление статуса отклика
  updateResponseStatus(response: VacancyResponse): Observable<VacancyResponse> {
    if (!this.isBrowser()) {
      return of(response);  
    }

    const responses = JSON.parse(localStorage.getItem(this.responsesKey) || '[]');
    const index = responses.findIndex((r: VacancyResponse) => r.id === response.id);
    if (index !== -1) {
      responses[index] = response;
      localStorage.setItem(this.responsesKey, JSON.stringify(responses));  
      this.responses.next(responses);  
    }
    return of(response);  
  }

  // Получение откликов для работодателя по идентификатору вакансии
  getResponsesForEmployer(vacancyId: number): Observable<VacancyResponse[]> {
    if (!this.isBrowser()) {
      return of([]);  
    }

    const responses = JSON.parse(localStorage.getItem(this.responsesKey) || '[]');
    // Фильтруем отклики по вакансии
    const filteredResponses = responses.filter((response: VacancyResponse) => response.vacancyId === vacancyId);
    return of(filteredResponses);
  }

  // Получение всех откликов на вакансии (например, для админа)
  getAllResponses(): Observable<VacancyResponse[]> {
    if (!this.isBrowser()) {
      return of([]);  
    }

    const responses = JSON.parse(localStorage.getItem(this.responsesKey) || '[]');
    this.responses.next(responses);  
    return of(responses);  
  }
}
