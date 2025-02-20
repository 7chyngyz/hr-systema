import { Component } from "@angular/core";

@Component({
    selector: 'app-home-page',
    standalone: false,
    template: `
    <app-hero></app-hero>
    <app-latest-vacancies></app-latest-vacancies>
    <app-popular-category></app-popular-category>
    <app-cards></app-cards>
    `,
})

export class HomePageComponent {}