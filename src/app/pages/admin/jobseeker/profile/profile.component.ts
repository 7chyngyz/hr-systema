import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  imports: [ RouterModule ],
  selector: 'app-profile',
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Мой профиль</h2>
          <div class="flex gap-12">
            <a routerLink="personal-info" routerLinkActive="text-blue-500">Личная информация</a>
            <a routerLink="skills" routerLinkActive="text-blue-500">Профессиональные навыки</a>
          </div>
        </div>
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
})
export class ProfileComponent { }
