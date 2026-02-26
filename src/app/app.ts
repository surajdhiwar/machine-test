import { Component } from '@angular/core';
import { Category } from './category/category';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Category],
  template: `<app-category></app-category>`
})
export class App {
}