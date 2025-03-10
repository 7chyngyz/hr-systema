import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  company?: string
  type: 'jobSeeker' | 'employer';
  name?: string;
  companyName?: string;
  email: string;
  password: string;
  hasResume?: boolean; // Добавляем поле для отслеживания наличия резюме
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        try {
          this.currentUserSubject.next(JSON.parse(storedUser));
        } catch (error) {
          console.error('Failed to parse user from localStorage', error);
          this.currentUserSubject.next(null);
        }
      }
    }
  }

  registerJobSeeker(name: string, email: string, password: string) {
    const user: User = {
      id: Date.now(),
      type: 'jobSeeker',
      name,
      email,
      password,
      hasResume: false, // По умолчанию у соискателя нет резюме
    };
    this.saveUser(user);
  }

  registerEmployer(companyName: string, email: string, password: string) {
    const user: User = {
      id: Date.now(),
      type: 'employer',
      companyName,
      email,
      password,
    };
    this.saveUser(user);
  }

  private saveUser(user: User) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
  }

  login(email: string, password: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      console.log('Stored User:', storedUser);
      if (storedUser.email === email && storedUser.password === password) {
        this.currentUserSubject.next(storedUser);
        return true;
      }
    }
    return false;
  }

  logout() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
  }

  getUserType(): string | null {
    const user = this.currentUserSubject.value;
    return user ? user.type : null;
  }

  // Геттер для получения текущего пользователя
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  // Метод для проверки наличия резюме у соискателя
  checkResume(userId: number): boolean {
    // Для примера резюме сохраняем в localStorage
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user && user.id === userId) {
      return user.hasResume ?? false; // Возвращаем true, если резюме есть, иначе false
    }
    return false;
  }

  // Метод для обновления статуса резюме
  updateResumeStatus(hasResume: boolean) {
    const user = this.currentUserSubject.value;
    if (user) {
      user.hasResume = hasResume;
      this.saveUser(user); // Сохраняем обновленный статус
    }
  }
}
