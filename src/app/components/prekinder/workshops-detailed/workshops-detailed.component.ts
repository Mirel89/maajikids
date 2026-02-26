import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Workshop {
  title: string;
  subtitle: string;
  description: string;
  image: string;  // ← Aquí va la ruta de tu imagen
  reverse?: boolean;
}

@Component({
  selector: 'app-workshops-detailed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops-detailed.component.html',
  styleUrls: ['./workshops-detailed.component.css']
})
export class WorkshopsDetailedComponent {
  workshops: Workshop[] = [
    {
      title: 'Maaji ANgelitos',
      subtitle: 'Gráfico plástico',
      description: 'Favorece el desarrollo de la creatividad. La exploración y contacto con distintos materiales, acerca a los niños al mundo de lo sensible de manera divertida y lúdica a través de toda nuestra currícula. De manera más específica trabajan con su Maestra, que los acompaña a insertarse al mundo de la expresión a través del arte.',
      image: 'assets/img/angelitos.jpg',
      reverse: false
    },
    {
      title: 'Teatro',
      subtitle: 'musical',
      description: 'Es una de las actividades que contribuyen desarrollar la expresión corporal y verbal. Los niños aprenden a trabajar en equipo, desarrollan su imaginación y creatividad, mejoran su autoestima y pierden el miedo escénico.',
      image: 'assets/images/talleres/teatro-musical.jpg',  // ← TU IMAGEN
      reverse: true
    },
    {
      title: 'Música',
      subtitle: 'y movimiento',
      description: 'Desarrolla la sensibilidad auditiva, el sentido del ritmo y la coordinación motriz. Los niños aprenden a expresar sus emociones a través del sonido y el movimiento corporal.',
      image: 'assets/images/talleres/musica-movimiento.jpg',  // ← TU IMAGEN
      reverse: false
    }
  ];
}
