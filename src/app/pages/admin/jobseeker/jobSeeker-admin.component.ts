import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-jobseeker-profile",
  imports: [RouterModule], 
  standalone: true,
  template: `
  <section class="bg-slate-100 py-[30px] px-[150px]">
    <div class="w-full h-[70px] rounded-md bg-white flex items-center px-[50px] gap-16">
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" routerLink="/admin/jobseeker/vacancies">Вакансии</a>
      <a class="text-[16px] font-bold hover:text-blue-600 hover:border-b" routerLink="/admin/jobseeker/applications">Мои Отклики</a>
    </div>
    <div class="flex flex-col justify-center items-center gap-8 max-h-[60vh] h-screen">
      <span class="text-[16px] font-bold text-gray-500">В данный момент у Вас нет ни одного отклика</span>
      <button class="w-[229px] h-[52px] bg-blue-600 text-white text-[16px] font-bold rounded-full">
        Искать вакансии
      </button>
    </div>
    <router-outlet></router-outlet>
  </section>
  `,
})
export class JobSeekerProfileComponent {}
