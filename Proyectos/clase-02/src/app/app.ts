import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursosListado } from './modules/cursos/pages/cursos-listado/cursos-listado';
import { DetallesCurso } from './modules/cursos/pages/detalles-curso/detalles-curso';

@Component({
  selector: 'app-root',
  imports: [CursosListado, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('clase-02');
}
