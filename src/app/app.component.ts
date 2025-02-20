import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  standalone: false,
})
export class AppComponent {
  title = 'project-hr-system';
}
