import { Component, input, OnInit, output, signal } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';

@Component({
  selector: 'app-tabla-listado-cursos',
  templateUrl: './tabla-listado-cursos.component.html',
  styleUrls: ['./tabla-listado-cursos.component.css'],
})
export class TablaListadoCursosComponent implements OnInit {

  cursos = input<Curso[]>()

  eventEmitter = output<Curso>()

  cursoSeleccionado = signal<Curso | null>(null);

  constructor() {}

  ngOnInit() {}

  seleccionarCurso(course: Curso) {
    this.cursoSeleccionado.set(course);
  }

  tocarFavorito(curso: Curso) {
    this.eventEmitter.emit(curso)
  }
}
