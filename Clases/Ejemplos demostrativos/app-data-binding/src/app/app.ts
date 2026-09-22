import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Two-way binding
  nombre: string = 'Juan';

  // One-way binding
  saludo: string = '¡Bienvenido a la app de Data Binding!';

  get nombreEnMayusculas(): string {
    return this.nombre.toUpperCase();
  }

  mostrarNombre(){
    console.log(this.nombre);
    
  }

} 