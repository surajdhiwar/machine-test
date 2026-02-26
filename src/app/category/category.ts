import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.html'
})
export class Category {

  categoryName = '';
  categories: any[] = [];

  addCategory() {
    if (this.categoryName.trim() !== '') {
      this.categories.push({
        categoryId: this.categories.length + 1,
        categoryName: this.categoryName
      });
      this.categoryName = '';
    }
  }
}