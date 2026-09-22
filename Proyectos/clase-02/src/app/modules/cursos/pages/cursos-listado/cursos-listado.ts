import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { Curso } from '../../interfaces/cursos.interface';
import { TablaListadoCursosComponent } from '../../components/tabla-listado-cursos/tabla-listado-cursos.component';
import { FormsModule } from '@angular/forms';
import { CursosService } from '../../../../api/services/cursos/cursos.service';

@Component({
  imports: [TablaListadoCursosComponent, FormsModule],
  selector: 'app-cursos-listado',
  styleUrl: './cursos-listado.css',
  templateUrl: './cursos-listado.html',
})
export class CursosListado implements OnInit {

  loading:boolean = true;

  cursoService = inject(CursosService);

  search: string = '';

  titulo: string = 'Listado de cursos';

  cursos = signal<Curso[]>([]);

  //computed
  cursosContador = computed(() => {
    return this.cursos().length;
  });

  cursosFavoritos = computed(() => {
    return this.cursos().filter((curso) => curso.favorite);
  });

  //signal
  cursoSeleccionado = signal<Curso | null>(null);

  //effect
  effectCursoSeleccionado = effect(() => {
    if (this.cursoSeleccionado() != null) {
      alert('Curso seleccionado: ' + this.cursoSeleccionado()?.name);
    }
  });

  ngOnInit(): void {
    console.log('CUANDO EL COMPONENTE INICIA');
    this.cargarCursos();
  }

  seleccionarCurso(course: Curso) {
    this.cursoSeleccionado.set(course);
  }

  tocarFavorito(cursoFavorito: Curso) {
    this.cursoService.tocarFavorito(cursoFavorito);
  }

  cambioInput() {
    console.log(this.search);
  }

  cargarCursos() {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        this.cursos.set(data);
      },
      error: (error) => {
        console.log('error');
      },
      complete: () => {
        this.loading = false;
        console.log('solo me ejecuto si funciona el next');
      },
    });
  }
}
