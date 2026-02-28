import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: number;
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-services-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-carousel.component.html',
  styleUrls: ['./services-carousel.component.css']
})
export class ServicesCarouselComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'MAAJI ANGELITOS',
      image: 'assets/images/talleres/angelitos.jpg',
      description: 'Maaji angelitos '
    },
    {
      id: 2,
      title: 'MAAJI GATEADORES',
      image: 'assets/images/talleres/gateadores.jpg',
      description: 'Maaji gateadores'
    },
    {
      id: 3,
      title: 'MAAJI CAMINADORES',
      image: 'assets/images/talleres/Caminadores.jpg',
      description: 'Maaji caminadores'
    },
    {
      id: 4,
      title: ' MAAJI EXPLORADORES',
      image: 'assets/images/talleres/exploradores.jpg',
      description: 'Maaji exploradores'
    },
    {
      id: 5,
      title: 'MAAJI CONVERSADORES',
      image: 'assets/images/talleres/Conversadores.jpg',
      description: 'Maaji conversadores'
    }
  ];

  currentIndex = 0;
  itemsPerPage = 3;

  next() {
    if (this.currentIndex < this.services.length - this.itemsPerPage) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  get visibleServices() {
    return this.services.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  get totalPages() {
    return this.services.length - this.itemsPerPage + 1;
  }
}
