import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-cloud',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome-cloud.component.html',
  styleUrls: ['./welcome-cloud.component.css']
})
export class WelcomeCloudComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.tryAutoPlay();
    }, 500);
  }

  tryAutoPlay() {
    const video = this.elementRef.nativeElement.querySelector('.promo-video') as HTMLVideoElement;
    if (video) {
      video.play().catch((error: any) => {
        console.log('Autoplay bloqueado, mostrando botón de play:', error);
        const overlay = this.elementRef.nativeElement.querySelector('#videoOverlay') as HTMLElement;
        if (overlay) {
          overlay.style.display = 'flex';
        }
      });
    }
  }

  playVideo() {
    const video = this.elementRef.nativeElement.querySelector('.promo-video') as HTMLVideoElement;
    const overlay = this.elementRef.nativeElement.querySelector('#videoOverlay') as HTMLElement;

    if (video) {
      video.play();
      video.muted = false;
    }

    if (overlay) {
      overlay.style.display = 'none';
    }
  }
}
