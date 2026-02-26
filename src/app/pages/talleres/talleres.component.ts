import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Workshop {
  id: number;
  title: string;
  icon: string;
  description: string;
  image: string;
  fullDescription: string;
}

@Component({
  selector: 'app-talleres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent {
  workshops: Workshop[] = [
    {
      id: 1,
      title: 'Maaji Angelitos',
      icon: '',
      description: 'Para niños de 2 a 6 meses',
      image: 'assets/images/talleres/foto-angelitos.png',
      fullDescription: 'Este programa es deal para niños que empiezan a descubri sonidos, luces y texturas. Estan fortaleciendo su cabecita y cuerpo. Aqui aprendera a responder a estimulos visuales y auditivos. Fortalecer cuello, brazos y espalda. Explorar de forma segura. Crear un vinculo afectivo fuerte.'
    },
    {
      id: 2,
      title: 'Maaji Gateadores',
      icon: '',
      description: 'Para niños de 6 a 12 meses',
      image: 'assets/images/talleres/foto-gateadores.png',
      fullDescription: 'Este programa es ideal para los pequeños que quieren moverse todo el tiempo y empiezan a arrastrarse o gatear. Aqui en Maajikids aprendera a arrastrarse y gatear con seguridad, coordinar movimientos, socializar mediante el juego, desarrollar lenguaje, sentidos y pensamiento.'
    },
    {
      id: 3,
      title: 'Maaji Caminadores',
      icon: '',
      description: 'Para niños de 12 a 24 meses',
      image: 'assets/images/talleres/foto-caminadores.png',
      fullDescription: 'Este programa es ideal para los pequeños que ya camninan o estan por hacerlo y estan explorando todo a su alrededor. Aqui en Maajikids aprendera a caminar con mayor seguridad, seguir rutinas y normas simples, reconocer colores, formas y objetos, comunicarse mejor y compartir.'
    },
    {
      id: 4,
      title: 'Maaji Exploradores',
      icon: '',
      description: 'Para niños de 18 a 30 meses',
      image: 'assets/images/talleres/foto-exploradores.png',
      fullDescription: 'El programa Maaji exploradores esta dirigido a los pequeños que son curiosos, llenos de energia y que buscan independencia. Aqui aprendera a ser mas autonomo, esperar turnos y conivivir con mas pequeños de su misma edad, desarrollar motricidad fina y gruesa, aprender conceptos pre academicos jugando..'
    },
    {
      id: 5,
      title: 'Maaji Conversadores',
      icon: '',
      description: 'Para niños de 2 a 3 años y medio',
      image: 'assets/images/talleres/foto-conversadores.png',
      fullDescription: 'El programa Maaji conversadores esta dirigido a los pequeños que quieren hablar, preguntar y expresarse, ya forman frases o estan por hacerlo. Aqui aprendera a ampliar el vocabulario, Mejorar la pronunciacion, expresar sus emociones, participar en actividades grupales con pequeños de su misma edad, y fortalecer su autonomia.'
    },

  ];

  selectedWorkshop: Workshop | null = null;

  selectWorkshop(workshop: Workshop) {
    this.selectedWorkshop = workshop;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBackToList() {
    this.selectedWorkshop = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
