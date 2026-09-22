import { Service, signal } from '@angular/core';
import { Curso } from '../../../modules/cursos/interfaces/cursos.interface';
import { delay, Observable, of } from 'rxjs';

@Service()
export class CursosService {
  cursos = signal<Curso[]>([
    {
      id: 1,
      name: 'Angular 22',
      category: 'Frontend',
      favorite: false,
    },
    {
      id: 2,
      name: 'Docker',
      category: 'DevOps',
      favorite: false,
    },
    {
      id: 3,
      name: 'Java Spring Boot',
      category: 'Backend',
      favorite: false,
    },
  ]);

  tocarFavorito(cursoFavorito: Curso) {
    this.cursos.update((cursos) => {
      return cursos.map((curso) =>
        curso.id === cursoFavorito.id ? { ...curso, favorite: !curso.favorite } : curso,
      );
    });
  }

  getCursos():Observable<Curso[]> {
    return of(this.cursos()).pipe(
        delay(1000)
    )
  }
}
