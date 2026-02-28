import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaVisitaComponent } from '../../components/shared/reserva-visita/reserva-visita.component';

@Component({
  selector: 'app-reserva-visita-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReservaVisitaComponent],
  template: `
    <div class="reserva-page-container">
      <app-reserva-visita></app-reserva-visita>
    </div>
  `,
  styles: [`
    .reserva-page-container {
      min-height: 100vh;
      background: white;
    }
  `]
})
export class ReservaVisitaPageComponent {}
