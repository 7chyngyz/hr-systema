import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProfileService } from "../../../../../core/services/profile.service";

@Component({
  selector: "app-personal-info",
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <h2 class="font-bold text-[32px]">Личная информация</h2>

        <form (ngSubmit)="savePersonalInfo()" class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg">
          <p class="text-lg font-semibold">Фото профиля</p>
          <input type="file" (change)="onFileChange($event)" class="border border-gray-300 rounded-md p-2" />

          <p class="text-lg font-semibold">Имя</p>
          <input
            type="text"
            [(ngModel)]="profile.firstName"
            name="firstName"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите своё имя"
          />

          <p class="text-lg font-semibold">Фамилия</p>
          <input
            type="text"
            [(ngModel)]="profile.lastName"
            name="lastName"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите свою фамилию"
          />

          <p class="text-lg font-semibold">Дата рождения</p>
          <input
            type="date"
            [(ngModel)]="profile.birthDate"
            name="birthDate"
            class="border border-gray-300 rounded-md p-2"
          />

          <p class="text-lg font-semibold">Выберите страну проживания</p>
          <select [(ngModel)]="profile.country" name="country" class="border border-gray-300 rounded-md p-2">
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

          <p class="text-lg font-semibold">Город</p>
          <input
            type="text"
            [(ngModel)]="profile.city"
            name="city"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите название города"
          />

          <p class="text-lg font-semibold">Адрес</p>
          <input
            type="text"
            [(ngModel)]="profile.address"
            name="address"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите название улицы"
          />

          <p class="text-lg font-semibold">Телефон</p>
          <input
            type="tel"
            [(ngModel)]="profile.phone"
            name="phone"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите номер телефона"
          />

          <p class="text-lg font-semibold">Почта</p>
          <input
            type="email"
            [(ngModel)]="profile.email"
            name="email"
            class="border border-gray-300 rounded-md p-2"
            placeholder="Введите почту"
          />

          <div class="flex gap-4">
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
    </section>
  `,
})
export class PersonalInfoComponent {
  profile: any = {};

  constructor(private profileService: ProfileService) {
    this.profile = this.profileService.getProfileData();
  }

  savePersonalInfo() {
    this.profileService.setProfileData(this.profile); 
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profile.profileImage = file.name;
    }
  }

  clearForm() {
    this.profile = {}; 
  }
}
