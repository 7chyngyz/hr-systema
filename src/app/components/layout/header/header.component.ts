import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth2.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <header class="w-full bg-white py-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-20">
            <h1 routerLink="/" class="cursor-pointer text-[23px] font-bold text-gray-700">Border</h1>
            <span *ngIf="(user$ | async)?.type !== 'employer'" routerLink="vacancies" class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">Вакансии</span>
            <span class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">FAQ</span>
            <span class="text-[16px] leading-6 opacity-[0.7] font-medium cursor-pointer">Контакты</span>
          </div>
          <div class="flex items-center gap-10 relative">
            <ng-container *ngIf="user$ | async as user; else guestButtons">
              <button (click)="toggleModal()" class="text-[18px] font-medium relative">
                👋 {{ userName }}
              </button>

              <ng-container *ngIf="user.type === 'employer'">
                <button routerLink="create-vacancy" class="bg-blue-500 text-white text-[16px] w-[200px] font-medium h-[52px] rounded-full">
                  <span class="text-[25px] p-2">+</span>Создать вакансию
                </button>
              </ng-container>
              <ng-container *ngIf="user.type === 'jobSeeker'">
                <button routerLink="/admin/jobseeker/create-profile" class="bg-blue-500 text-white text-[16px] w-[300px] font-medium h-[52px] rounded-full">
                  Добавить резюме
                </button>
              </ng-container>
            </ng-container>
            <ng-template #guestButtons>
              <button routerLink="login" class="bg-gray-200 w-[157px] h-[52px] text-[16px] font-medium rounded-full">Войти</button>
              <button routerLink="register" class="bg-blue-500 w-[186px] text-white text-[16px] font-medium h-[52px] rounded-full flex items-center justify-center">
                Регистрация
              </button>
            </ng-template>
          </div>
        </div>
      </div>
    </header>

    <div *ngIf="isModalOpen" class="absolute right-96 mt-2">
      <div class="bg-white p-5 rounded-lg shadow-lg w-[250px]">
        <p class="text-[18px] font-medium">👋 {{ userName }}</p>
        <ul class="mt-3 space-y-2">
          <li (click)="onChange('profile')" class="cursor-pointer hover:text-blue-500">
            {{ userType === 'jobSeeker' ? 'Мой профиль' : 'Личный кабинет' }}
          </li>
          <li (click)="onChange('favorites')" class="cursor-pointer hover:text-blue-500">Настройки</li>
          <li (click)="onChange('logout')" class="cursor-pointer text-red-500 hover:text-red-700">Выход</li>
        </ul>
        <button (click)="toggleModal()" class="mt-4 w-full py-2 bg-gray-200 rounded-lg">Закрыть</button>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;
  userName: string = '';
  userType: string = ''; 
  isModalOpen = false;

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.currentUser;
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.type === 'jobSeeker' ? user.name : user.companyName;
        this.userType = user.type; 
      } else {
        this.userName = '';
        this.userType = '';
      }
    });
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onChange(value: string) {
    this.toggleModal(); 
    if (value === 'logout') {
      this.authService.logout();
    } else if (value === 'profile') {
      this.user$.subscribe(user => {
        if (user.type === 'jobSeeker') {
          this.router.navigate(['/admin/jobseeker/profile']);
        } else if (user.type === 'employer') {
          this.router.navigate(['/admin/employer/my-vacancies']);
        }
      });
    }
  }
}
