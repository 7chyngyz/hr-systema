import { Component } from "@angular/core";
import { ProfileService } from "../../../../../core/services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-profile',
  standalone: false,
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-12">
          <h2 class="font-bold text-[32px]">Мой профиль</h2>
          <form (ngSubmit)="saveProfile()" class="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg">
          <!-- Фото профиля -->
          <div>
            <p class="text-lg font-semibold">Фото профиля</p>
            <input
              type="text"
              [(ngModel)]="profile.profileImageUrl"
              name="profileImageUrl"
              class="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Введите URL фото профиля"
            />
          </div>

          <!-- Две колонки -->
          <div class="grid grid-cols-2 gap-6">
            <div>
              <p class="text-lg font-semibold">Имя</p>
              <input
                type="text"
                [(ngModel)]="profile.firstName"
                name="firstName"
                class="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Введите своё имя"
              />
            </div>

            <div>
              <p class="text-lg font-semibold">Фамилия</p>
              <input
                type="text"
                [(ngModel)]="profile.lastName"
                name="lastName"
                class="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Введите свою фамилию"
              />
            </div>

            <div>
              <p class="text-lg font-semibold">Дата рождения</p>
              <input type="date" [(ngModel)]="profile.birthDate" name="birthDate" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>

            <div>
              <p class="text-lg font-semibold">Выберите страну проживания</p>
              <select [(ngModel)]="profile.country" name="country" class="border border-gray-300 rounded-md p-2 w-full">
                <option>Кыргызстан</option>
                <option>Армения</option>
                <option>Белоруссия</option>
                <option>Казахстан</option>
                <option>Латвия</option>
                <option>Литва</option>
                <option>Молдавия</option>
                <option>Монголия</option>
                <option>Норвегия</option>
                <option>Польша</option>
              </select>
            </div>

            <div>
              <p class="text-lg font-semibold">Город</p>
              <input type="text" [(ngModel)]="profile.city" name="city" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите название города" />
            </div>

            <div>
              <p class="text-lg font-semibold">Адрес</p>
              <input type="text" [(ngModel)]="profile.address" name="address" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите название улицы" />
            </div>

            <div>
              <p class="text-lg font-semibold">Телефон</p>
              <input type="tel" [(ngModel)]="profile.phone" name="phone" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите номер телефона" />
            </div>

            <div>
              <p class="text-lg font-semibold">Почта</p>
              <input type="email" [(ngModel)]="profile.email" name="email" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите почту" />
            </div>

            <div>
              <p class="text-lg font-semibold">Образование</p>
              <select [(ngModel)]="profile.education" name="education" class="border border-gray-300 rounded-md p-2 w-full">
                <option>Среднее</option>
                <option>Высшее</option>
              </select>
            </div>

            <div>
              <p class="text-lg font-semibold">Учебное заведение</p>
              <input type="text" [(ngModel)]="profile.university" name="university" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>

            <div>
              <p class="text-lg font-semibold">Месяц и год окончания</p>
              <input type="month" [(ngModel)]="profile.graduation" name="graduation" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>

            <div>
              <p class="text-lg font-semibold">Позиция</p>
              <input type="text" [(ngModel)]="profile.position" name="position" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>

            <div>
              <p class="text-lg font-semibold">Место работы</p>
              <input type="text" [(ngModel)]="profile.company" name="company" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>

            <div>
              <p class="text-lg font-semibold">Период работы</p>
              <input type="text" [(ngModel)]="profile.workPeriod" name="workPeriod" class="border border-gray-300 rounded-md p-2 w-full" />
            </div>
          </div>

          <!-- О себе и навыки -->
          <div>
            <p class="text-lg font-semibold">О себе</p>
            <textarea [(ngModel)]="profile.about" name="about" class="border p-2 rounded w-full"></textarea>
          </div>

          <div>
            <p class="text-lg font-semibold">Навыки</p>
            <textarea [(ngModel)]="profile.skills" name="skills" class="border p-2 rounded w-full"></textarea>
          </div>

          <div>
            <p class="text-lg font-semibold">CV (по ссылке)</p>
            <input
              type="text"
              [(ngModel)]="profile.cvUrl"
              name="cvUrl"
              class="border p-2 rounded w-full"
              placeholder="Введите URL вашего резюме"
            />
          </div>

          <!-- Кнопки -->
          <div class="flex gap-4 mt-4">
            <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Сохранить
            </button>
            <button
              type="button"
              (click)="clearForm()"
              class="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
            >
              Отмена
            </button>
          </div>
        </form>
        </div>
        <router-outlet></router-outlet>
      </div>
    </section>
  `,
})
export class CreateProfile {
  profile: any = {};

  constructor(private profileService: ProfileService, private router: Router) {
    this.profile = this.profileService.getProfileData();
  }

  saveProfile() {
    this.profileService.setProfileData(this.profile);
    this.router.navigate(["/admin/jobseeker/profile"]);
  }

  clearForm() {
    this.profile = {};
  }
}
