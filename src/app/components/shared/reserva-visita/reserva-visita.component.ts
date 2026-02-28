import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-visita',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserva-visita.component.html',
  styleUrls: ['./reserva-visita.component.css']
})
export class ReservaVisitaComponent {
  formData = {
    nombre: '',
    email: '',
    whatsapp: '',
    fechaNacimiento: '',
    fechaVisita: '',
    mensaje: ''
  };

  onSubmit() {
    console.log('Reserva enviada:', this.formData);

    alert(`¡Gracias ${this.formData.nombre}! ✅\n\nTu visita ha sido reservada para el ${this.formData.fechaVisita}.\n\nNos pondremos en contacto contigo pronto.`);

    // Limpiar formulario
    this.formData = {
      nombre: '',
      email: '',
      whatsapp: '',
      fechaNacimiento: '',
      fechaVisita: '',
      mensaje: ''
    };
  }
}
