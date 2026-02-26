import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admission-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admission-section.component.html',  // ← Ruta correcta
  styleUrls: ['./admission-section.component.css']
})
export class AdmissionSectionComponent {  // ← Nombre correcto

  // ✅ Propiedades que usa el HTML
  requisitos: string[] = [
    'Partida de Nacimiento Original y copia',
    'Tarjeta de vacunación (Copia)',
    'Copia del DNI del Niño/a',
    'Copia del DNI de ambos padres',
    '4 Fotos tamaño carnet',
  ];

  formularios: Array<{nombre: string, url: string}> = [
    {
      nombre: 'Formato de actualización de datos Padres de Familia y Alumno 2026',
      url: '#'
    },
    {
      nombre: 'Declaración Jurada Padres de Familia 2026',
      url: '#'
    },
    {
      nombre: 'Contrato de Servicios Educativos Kinder 2026',
      url: '#'
    },
  ];
}
