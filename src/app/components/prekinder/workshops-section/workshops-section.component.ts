import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workshop {
  title: string;
  description: string;
  color: string;
  icon: string;
  position: 'left' | 'right';
}

@Component({
  selector: 'app-workshops-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops-section.component.html',
  styleUrls: ['./workshops-section.component.css']
})
export class WorkshopsSectionComponent {
  workshops: Workshop[] = [
    {
      title: 'Maaji Angelitos',
      description: 'Para la formación científica, orientada a alimentar esa curiosidad en los niños y aporta por ende una serie de conceptos, aptitudes para la vida y opciones de futuro profesional que les serán de gran valor.',
      color: '#6bcb77',
      icon: '',
      position: 'left'
    },
    {
      title: 'Maaji Gateadores',
      description: 'Los niños a los 4 y 5 años se inician en la Robótica Programable, trabajando temas de: lateralidad, dirección, avanzar, retroceder, girar, doblar, derecha e izquierda.',
      color: '#4d96ff',
      icon: '',
      position: 'right'
    },
    {
      title: 'Maaji Caminadores',
      description: 'Es la primera introducción a la danza clásica. Se trabaja el ritmo, compás y musicalidad. Adquieren desde pequeños la postura correcta para el ballet y la vida.',
      color: '#ff6b6b',
      icon: '',
      position: 'left'
    },
    {
      title: 'Maaji Exploradores',
      description: 'Cocinar puede ser para el niño una manera de adquirir confianza en sí mismo, de dar a conocer a los demás sus creaciones y de sentirse valorado por lo que ha hecho.',
      color: '#ffd93d',
      icon: '',
      position: 'right'
    },
    {
      title: 'Maaji Conversadores',
      description: 'Cocinar puede ser para el niño una manera de adquirir confianza en sí mismo, de dar a conocer a los demás sus creaciones y de sentirse valorado por lo que ha hecho.',
      color: '#FF00FF',
      icon: '',
      position: 'right'
    }
  ];
}
