import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  username: string;
  instagram: string;
  rating: number;
  review: string;
  category: string;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true
})
export class Footer implements OnInit, OnDestroy {
  @Input() selectedCategory: string = 'photography';
  private autoScrollInterval: any;

  testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      username: 'priya_clicks',
      instagram: 'https://instagram.com/priya_clicks',
      rating: 5,
      review: 'Amazing photography skills! Captured every moment perfectly. Highly recommended for any event.',
      category: 'photography'
    },
    {
      name: 'Rahul Kumar',
      username: 'rahul_model',
      instagram: 'https://instagram.com/rahul_model',
      rating: 5,
      review: 'Professional modeling shoot experience. Great direction and comfortable environment.',
      category: 'modelling'
    },
    {
      name: 'Sneha Reddy',
      username: 'sneha_photos',
      instagram: 'https://instagram.com/sneha_photos',
      rating: 4,
      review: 'Beautiful wedding photography. The team was very professional and creative.',
      category: 'photography'
    },
    {
      name: 'Arjun Singh',
      username: 'arjun_fashion',
      instagram: 'https://instagram.com/arjun_fashion',
      rating: 5,
      review: 'Excellent modeling portfolio shoot. Very satisfied with the final results.',
      category: 'modelling'
    },
    {
      name: 'Kavya Nair',
      username: 'kavya_memories',
      instagram: 'https://instagram.com/kavya_memories',
      rating: 5,
      review: 'Perfect portraits! Loved the natural lighting and creative angles used.',
      category: 'photography'
    }
  ];

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const scrollContainer = document.querySelector('.testimonial-scroll');
      if (scrollContainer) {
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        
        // Reset to beginning when reached end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 50) {
          setTimeout(() => {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }
    }, 3000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  get filteredTestimonials() {
    return this.testimonials.filter(testimonial => 
      testimonial.category === this.selectedCategory
    );
  }

  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}