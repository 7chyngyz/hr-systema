import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  type: 'jobSeeker' | 'employer';
  name?: string;
  companyName?: string;
  email: string;
  password: string;
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
          this.currentUserSubject.next(null); // если не удалось разобрать, сбросим
        }
      }
    }
  }

  registerJobSeeker(name: string, email: string, password: string) {
    const user: User = { type: 'jobSeeker', name, email, password };
    this.saveUser(user);
  }

  registerEmployer(companyName: string, email: string, password: string) {
    const user: User = { type: 'employer', companyName, email, password };
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
}
