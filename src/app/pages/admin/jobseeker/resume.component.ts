import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  template: `
    <div class="p-6 bg-white shadow-lg rounded">
      <h2 class="text-2xl font-bold mb-4">Резюме</h2>

      <div class="mb-4">
        <p><strong>Фото профиля:</strong> {{ profile.profileImage || 'Нет изображения' }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Имя:</strong> {{ profile.firstName }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Фамилия:</strong> {{ profile.lastName }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Дата рождения:</strong> {{ profile.birthDate }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Страна:</strong> {{ profile.country }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Город:</strong> {{ profile.city }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Адрес:</strong> {{ profile.address }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Телефон:</strong> {{ profile.phone }}</p>
      </div>

      <div class="mb-4">
        <p><strong>Почта:</strong> {{ profile.email }}</p>
      </div>

    </div>
  `,
})
export class ResumeComponent implements OnInit {
  profile: any = {};

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfileData();
  }
}
