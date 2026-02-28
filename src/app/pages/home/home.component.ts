import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeBannerComponent } from '../../components/prekinder/welcome-banner/welcome-banner.component';
import { AgeLevelsComponent } from '../../components/prekinder/age-levels/age-levels.component';
import { ServicesCarouselComponent } from '../../components/prekinder/services-carousel/services-carousel.component';
import { WelcomeCloudComponent } from '../../components/home/welcome-cloud/welcome-cloud.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeBannerComponent,
    AgeLevelsComponent,
    ServicesCarouselComponent,
    WelcomeCloudComponent
  ],
  template: `
    <app-welcome-banner></app-welcome-banner>
    <app-welcome-cloud></app-welcome-cloud>
    <app-age-levels></app-age-levels>
    <app-services-carousel></app-services-carousel>
  `,
  styles: []
})
export class HomeComponent {}
