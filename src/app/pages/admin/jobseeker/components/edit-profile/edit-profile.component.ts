import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../../core/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  template: `
    <section class="p-[50px]">
      <div class="flex flex-col gap-8">
        <h2 class="font-bold text-[32px]">Редактировать профиль</h2>
        <form (ngSubmit)="saveProfile()" class="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg">
          <!-- Форма редактирования профиля -->
          <div>
            <p class="text-lg font-semibold">Имя</p>
            <input type="text" [(ngModel)]="profile.firstName" name="firstName" class="border border-gray-300 rounded-md p-2 w-full" placeholder="Введите своё имя" />
          </div>
          <!-- Аналогично для всех остальных полей, как в предыдущем компоненте... -->
          
          <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Сохранить</button>
        </form>
      </div>
    </section>
  `,
})
export class EditProfileComponent implements OnInit {
  profile: any = {};

  constructor(private profileService: ProfileService, private router: Router) {
    this.profileService.getProfileData().subscribe((data) => {
      this.profile = data;
    });
  }
  

  ngOnInit() {}

  saveProfile() {
    this.profileService.setProfileData(this.profile);
    this.router.navigate(['/admin/jobseeker/profile']);
  }
}
