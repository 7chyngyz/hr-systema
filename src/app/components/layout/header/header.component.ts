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
          <div class="flex items-center gap-7">
            <ng-container *ngIf="user$ | async as user; else guestButtons">
              <select class="text-[18px] outline-none w-full min-w-[120px]" (change)="onChange($event)">
                <option>👋 {{ userName }}</option>
                <option value="profile">Личный кабинет</option>
                <option value="logout">Выход</option>
              </select>
              <ng-container *ngIf="user.type === 'employer'">
                <button routerLink="create-vacancy" class="bg-blue-500 text-white text-[16px] w-[300px] font-medium h-[52px] rounded-full">
                  Создать вакансию
                </button>
              </ng-container>
              <ng-container *ngIf="user.type === 'jobSeeker'">
                <button routerLink="create" class="bg-blue-500 text-white text-[16px] w-[300px] font-medium h-[52px] rounded-full">
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
    <router-outlet></router-outlet>
  `,
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;
  userName: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.currentUser;
  }

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.type === 'jobSeeker' ? user.name : user.companyName;
      } else {
        this.userName = '';
      }
    });
  }

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'logout') {
      this.authService.logout();
    } else if (value === 'profile') {
      this.user$.subscribe(user => {
        if (user.type === 'jobSeeker') {
          this.router.navigate(['/admin/jobseeker']);
        } else if (user.type === 'employer') {
          this.router.navigate(['/admin/employer/']);
        }
      })
    }
  }
}
