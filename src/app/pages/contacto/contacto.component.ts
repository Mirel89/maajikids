import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // Información de contacto
  contactInfo = {
    address: 'Av. República de Polonia Mz E1 Lote 9 Urb. los Pinos',
    district: 'San Juan de Lurigancho',
    phone1: '960874371',
    phone2: '(01) 1234567',
    email: 'info@maajikids.edu.pe'
  };

  // Datos del formulario
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  // Enviar formulario
  onSubmit() {
    console.log('Formulario enviado:', this.contactForm);
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
