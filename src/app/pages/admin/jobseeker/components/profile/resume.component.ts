import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../../core/services/profile.service';
import { Router } from '@angular/router';

interface Profile {
  fullName?: string;
  about?: string;
  education?: string;
  institution?: string;
  graduationDate?: string;
  position?: string;
  workplace?: string;
  workPeriod?: string;
  birthDate?: string;
  country?: string;
  city?: string;
  address?: string;
  email?: string;
  phone?: string;
  cvFile?: string;
  profileImage?: string | File; // Может быть URL или File
}

@Component({
  selector: 'app-resume',
  standalone: false,
  template: `
    <div class="bg-gray-50 min-h-screen p-8 font-sans">
      <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div class="flex justify-center mb-6">
          <img *ngIf="profileImageUrl" [src]="profileImageUrl" alt="Profile Image" class="w-32 h-32 object-cover rounded-full border-4 border-gray-200" />
          <div *ngIf="!profileImageUrl" class="w-32 h-32 flex items-center justify-center bg-gray-200 text-gray-600 font-bold rounded-full">
            Нет фото
          </div>
        </div>
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Мой профиль</h1>
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">{{ profile?.fullName || 'Не указано' }}</h2>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">О себе</h3>
          <p class="text-gray-600 leading-relaxed">{{ profile?.about || 'Не указано' }}</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Образование</h3>
          <p class="text-gray-600">{{ profile?.education || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.institution || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.graduationDate || 'Не указано' }}</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Опыт работы</h3>
          <p class="text-gray-600">{{ profile?.position || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.workplace || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.workPeriod || 'Не указано' }}</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Контактная информация</h3>
          <p class="text-gray-600">{{ profile?.birthDate || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.country || 'Не указано' }}, {{ profile?.city || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.address || 'Не указано' }}</p>
          <p class="text-gray-600">{{ profile?.email || 'Не указана' }}</p>
          <p class="text-gray-600">{{ profile?.phone || 'Не указан' }}</p>
        </div>
        <div class="mb-6">
          <h3 class="text-xl font-bold text-gray-700 mb-2">Резюме</h3>
          <a *ngIf="profile?.cvFile" [href]="profile?.cvFile" class="text-blue-500 hover:text-blue-700 underline">
            Скачать CV
          </a>
          <p *ngIf="!profile?.cvFile" class="text-gray-600">Резюме не загружено</p>
        </div>
        <div class="mb-6">
          <label for="fileUpload" class="block text-xl font-bold text-gray-700 mb-2">Загрузить фото</label>
          <input id="fileUpload" type="file" (change)="onFileSelected($event)" class="border p-2 rounded w-full" />
        </div>
        <div class="flex justify-between mt-6">
          <button (click)="editProfile()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Редактировать
          </button>
          <button (click)="deleteProfile()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Удалить
          </button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ResumeComponent implements OnInit {
  profile: Profile | null = null;
  profileImageUrl: string | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profileService.getProfileData().subscribe(
      (data: Profile) => {
        this.profile = data;
        this.loading = false;
        // Обработка изображения
        if (this.profile?.profileImage) {
          if (typeof this.profile.profileImage === 'string') {
            this.profileImageUrl = this.profile.profileImage;
          } else if (this.profile.profileImage instanceof Blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
              this.profileImageUrl = reader.result as string;
            };
            reader.readAsDataURL(this.profile.profileImage);
          }
        }
      },
      (error) => {
        console.error('Error loading profile data:', error);
        this.loading = false;
        this.error = true;
      }
    );
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
    }
  }

  editProfile() {
    // Перенаправляем пользователя на страницу редактирования
    this.router.navigate(['/admin/jobseeker/edit-profile']);
  }

  deleteProfile() {
    if (confirm('Вы уверены, что хотите удалить профиль?')) {
      this.profileService.deleteProfileData();
      this.router.navigate(['/admin/jobseeker/create-profile']);
    }
  }
}
