import { Component } from '@angular/core';

interface Category {
  logo: string;
  type: string;
  quantity: string | number;
  color: string;
}

@Component({
  selector: 'app-popular-category',
  standalone: false,
  template: `
    <section class="px-4 bg-gray-100 md:px-16 lg:px-60 py-14 h-[80vh] mt-[70px]">
      <h2 class="text-2xl md:text-3xl text-gray-900 font-bold mb-4">Популярные категории</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div *ngFor="let category of categories" class="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
          <div [style.backgroundColor]="category.color" class="w-12 h-12 flex items-center justify-center rounded-full">
            <img class="w-6 h-6" [src]="category.logo" alt="{{ category.type }}">
          </div>
          <div>
            <p class="text-gray-900 font-semibold">{{ category.type }}</p>
            <p class="text-gray-500 text-sm">{{ category.quantity }} вакансий</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PopularCategoryComponent {
  categories: Category[] = [
    { logo: '/assets/category-1.png', type: 'Искусство, развлечение', quantity: 35, color: '#8E44AD' },
    { logo: '/assets/category-2.png', type: 'Информационные технологии', quantity: 120, color: '#3498DB' },
    { logo: '/assets/category-3.png', type: 'Маркетинг и PR', quantity: 500, color: '#F1C40F' },
    { logo: '/assets/category-4.png', type: 'Наука, образование', quantity: 35, color: '#2ECC71' },
    { logo: '/assets/category-5.png', type: 'Бухгалтерия', quantity: 120, color: '#95A5A6' },
    { logo: '/assets/category-6.png', type: 'Административный персонал', quantity: 500, color: '#2980B9' },
    { logo: '/assets/category-7.png', type: 'Медицина, фармацевтика', quantity: 120, color: '#E74C3C' },
    { logo: '/assets/category-8.png', type: 'Инвестиции, консалтинг', quantity: 35, color: '#1ABC9C' },
    { logo: '/assets/category-9.png', type: 'Транспорт, логистика', quantity: 500, color: '#D35400' },
  ];
}