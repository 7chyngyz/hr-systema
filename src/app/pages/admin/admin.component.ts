import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: false,
  template: `
  <section class="bg-slate-100 py-[30px] px-[150px]">
    <div class="w-full h-[70px] rounded-md bg-white flex items-center px-[50px] gap-16">
    <ng-container *ngIf="role === 'jobseeker'">
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" [routerLink]="['/admin', role, 'vacancies']">Вакансии</a>
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" [routerLink]="['/admin', role, 'my-responses']">Мои Отклики</a>
    </ng-container>

    <ng-container *ngIf="role === 'employer'">
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" [routerLink]="['/admin', role, 'my-vacancies']">Мои Вакансии</a>
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" [routerLink]="['/admin', role, 'candidates']">Кандидаты</a>
    </ng-container>
    </div>
    <router-outlet></router-outlet>
  </section>
  `,
})
export class AdminComponent implements OnInit {
  role: 'jobseeker' | 'employer' | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const segments = this.route.snapshot.url;
    this.role = segments.length > 1 ? segments[1].path as 'jobseeker' | 'employer' : 'jobseeker';
  }  
}
