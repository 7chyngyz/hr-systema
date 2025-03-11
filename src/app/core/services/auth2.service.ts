import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  company?: string;
  type: 'jobSeeker' | 'employer';
  name?: string;
  companyName?: string;
  email: string;
  password: string;
  hasResume?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor() {
    if (this.isLocalStorageAvailable()) {
      const storedUser = this.getUserFromLocalStorage();
      if (storedUser) {
        this.currentUserSubject.next(storedUser);
      } else {
        console.error('No user found in localStorage');
      }
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  private getUserFromLocalStorage(): User | null {
    try {
      const storedUser = localStorage.getItem('currentUser');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      return null;
    }
  }

  registerJobSeeker(name: string, email: string, password: string) {
    const user: User = {
      id: Date.now(),
      type: 'jobSeeker',
      name,
      email,
      password,
      hasResume: false,
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
    if (this.isLocalStorageAvailable()) {
      try {
        console.log('Saving User:', user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error saving user to localStorage:', error);
      }
    }
  }

  login(email: string, password: string): boolean {
    const storedUser = this.getUserFromLocalStorage();
    if (!storedUser) {
      console.error("User not found or corrupted in localStorage");
      return false;
    }

    if (storedUser.email === email && storedUser.password === password) {
      this.currentUserSubject.next(storedUser);
      return true;
    } else {
      console.error('Invalid credentials');
      return false;
    }
  }

  logout() {
    if (this.isLocalStorageAvailable()) {
      try {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
      } catch (error) {
        console.error('Error clearing user from localStorage:', error);
      }
    }
  }

  getUserType(): string | null {
    const user = this.currentUserSubject.value;
    return user ? user.type : null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  checkResume(userId: number): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user && user.id === userId) {
      return user.hasResume ?? false;
    }
    return false; 
  }
  
  updateResumeStatus(hasResume: boolean) {
    const user = this.currentUserSubject.value;
    if (user) {
      user.hasResume = hasResume;
      this.saveUser(user);
    }
  }
}
