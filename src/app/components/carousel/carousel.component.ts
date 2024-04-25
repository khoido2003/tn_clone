import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items = [
    '../../../assets/hero-1.jpg',
    '../../../assets/hero-2.avif',
    '../../../assets/hero-3.jpg',
  ];
}
