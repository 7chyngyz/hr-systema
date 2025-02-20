import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.components';
import { HeroComponent } from './components/hero.component';
import { LatestVacanciesComponent } from './components/latest-vacancies.component';
import { PopularCategoryComponent } from './components/popular-category.component';
import { CardsComponent } from './components/cards.component';

@NgModule({
  declarations: [
    HomePageComponent, 
    HeroComponent, 
    LatestVacanciesComponent, 
    PopularCategoryComponent,
    CardsComponent,
  ], 
  imports: [CommonModule],
  exports: [HomePageComponent] 
})
export class HomePageModule {}
