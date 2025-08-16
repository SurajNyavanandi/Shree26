import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.html',
  styleUrl: './body.scss',
  standalone: true
})
export class Body {
  @Input() selectedCategory: string = 'photography';

  photographyImages = Array(10).fill(null);
  modellingImages = Array(8).fill(null);

  get filteredImages() {
    return this.selectedCategory === 'photography' 
      ? this.photographyImages 
      : this.modellingImages;
  }

  get currentCategory() {
    return this.selectedCategory === 'photography' 
      ? 'Photography' 
      : 'Modelling';
  }
}