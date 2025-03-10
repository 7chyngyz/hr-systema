import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { HomePageModule } from './pages/home/home-page.module';
import { RegisterModule } from './pages/register/register.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminModule } from './pages/admin/admin.module';
import { AllVacanciesComponent } from './pages/all-vacancies/all-vacancies.component';


@NgModule({
  declarations: [
    AppComponent,
    AllVacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomePageModule,
    RegisterModule,
    AdminModule,
    RouterModule,
    HttpClientModule,
    CommonModule, 
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
