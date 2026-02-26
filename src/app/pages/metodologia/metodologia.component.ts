import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.css']
})
export class MetodologiaComponent {
  currentImageIndex = 0;

  images: GalleryImage[] = [
    {
      src: 'assets/images/metodologia/metodologia-1.png',
      alt: 'Metodología educativa MAAJIKIDS'
    },
    {
      src: 'assets/images/metodologia/metodologia-2.jpg',
      alt: 'Aprendizaje activo'
    },
    {
      src: 'assets/images/metodologia/metodologia-3.jpg',
      alt: 'Trabajo cooperativo'
    },
    {
      src: 'assets/images/metodologia/metodologia-4.jpg',
      alt: 'Exploración sensorial'
    }
  ];

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.images.length - 1
      : this.currentImageIndex - 1;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  // Auto-play opcional
  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia cada 5 segundos
  }
}
