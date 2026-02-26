import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extranet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extranet.component.html',
  styleUrls: ['./extranet.component.css']
})
export class ExtranetComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    // Aquí iría la lógica de autenticación real
    console.log('Login intentado:', { username: this.username, password: this.password });

    // Simulación de login exitoso
    if (this.username && this.password) {
      alert('Bienvenido a MAAJIKIDS Extranet');
      // Redirigir al dashboard o home
      // this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor ingrese usuario y contraseña');
    }
  }
}
