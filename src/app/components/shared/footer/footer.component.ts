import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  text: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  links: FooterLink[] = [
    { text: 'Visita guiada', url: '/visita' },
    { text: 'Talleres a tu lado mama', url: '/talleres' },
    { text: 'Summer school', url: '/talleres' },
    { text: 'Trabaja con nosotros', url: '/trabaja' },
  ];

  currentYear = new Date().getFullYear();
}
