import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../../core/services/profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="saveProfile()" class="p-6 bg-white rounded shadow-md flex flex-col gap-4">
      <p class="text-lg font-semibold">О себе</p>
      <textarea [(ngModel)]="profile.about" name="about" class="border p-2 rounded"></textarea>
      
      <p class="text-lg font-semibold">Образование</p>
      <select [(ngModel)]="profile.education" name="education" class="border p-2 rounded">
        <option>Среднее</option>
        <option>Высшее</option>
      </select>

      <p class="text-lg font-semibold">Учебное заведение</p>
      <input type="text" [(ngModel)]="profile.university" name="university" class="border p-2 rounded" />

      <p class="text-lg font-semibold">Месяц и год окончания</p>
      <input type="month" [(ngModel)]="profile.graduation" name="graduation" class="border p-2 rounded" />

      <p class="text-lg font-semibold">Позиция</p>
      <input type="text" [(ngModel)]="profile.position" name="position" class="border p-2 rounded" />

      <p class="text-lg font-semibold">Место работы</p>
      <input type="text" [(ngModel)]="profile.company" name="company" class="border p-2 rounded" />

      <p class="text-lg font-semibold">Период работы</p>
      <input type="text" [(ngModel)]="profile.workPeriod" name="workPeriod" class="border p-2 rounded" />

      <p class="text-lg font-semibold">Навыки</p>
      <textarea [(ngModel)]="profile.skills" name="skills" class="border p-2 rounded"></textarea>
      
      <p class="text-lg font-semibold">Загрузить CV</p>
      <input type="file" (change)="onFileSelect($event)" class="border p-2 rounded" />

      <div class="flex gap-4 mt-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Сохранить</button>
        <button type="button" class="bg-gray-300 px-4 py-2 rounded">Отмена</button>
      </div>
    </form>
  `,
})
export class SkillsComponent {
  profile: any = {};
  
  constructor(private profileService: ProfileService, private router: Router) {}
  
  saveProfile() {
    this.profileService.setProfileData(this.profile);
    this.router.navigate(['/profile']);
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) this.profile.cv = file.name;
  }
}