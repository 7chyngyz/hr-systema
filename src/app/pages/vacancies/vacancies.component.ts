import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-list',
  imports: [CommonModule], 
  template: `
    <section class="pt-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Добавление новой вакансии</h2>
          <p *ngIf="userName">{{ userName }}</p>
          <p *ngIf="!userName">Пожалуйста, войдите, чтобы добавить вакансию.</p>
        </div>
        <div>
          <form>
            <textarea placeholder="О компании"></textarea>
            <input type="text" placeholder="Позиция" />
            <input type="text" placeholder="Дата окончания" />
            <button type="submit">Добавить вакансию</button>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class VacanciesComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Получаем текущего пользователя и его имя
    this.authService.currentUser.subscribe(user => {
      if (user && user.type === 'employer') {
        this.userName = user.companyName || '';
      } else {
        this.userName = ''; // Для других пользователей или неавторизованных — пусто
      }
    });
  }
}
