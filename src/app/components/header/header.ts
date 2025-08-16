import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {
  @Output() categorySelected = new EventEmitter<string>();

  onCategorySelect(category: string) {
    this.categorySelected.emit(category);
  }

  onBookSlot() {
    // Handle book slot functionality later
    console.log('Book slot clicked');
  }
}