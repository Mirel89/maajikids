import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgeLevel {
  age: string;
  color: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-age-levels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './age-levels.component.html',
  styleUrls: ['./age-levels.component.css']
})
export class AgeLevelsComponent {
  levels: AgeLevel[] = [
    {
      age: '2 años',
      color: 'rgb(212, 43, 170)',
      image: 'assets/images/prekinder-1.jpg',
      description: 'Edad adecuada para iniciar'
    },
    {
      age: '3 años',
      color: '#ffd93d',
      image: 'assets/images/prekinder-2.jpg',
      description: 'Edad en la que se continúa'
    },
  ];
}
