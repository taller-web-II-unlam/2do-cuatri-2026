import { Component, inject, OnInit, signal } from '@angular/core';
import { TablaListadoCursosComponent } from '../../components/tabla-listado-cursos/tabla-listado-cursos.component';
import { Curso } from '../../interfaces/cursos.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [TablaListadoCursosComponent],
  selector: 'app-detalles-curso',
  styleUrl: './detalles-curso.css',
  templateUrl: './detalles-curso.html',
})
export class DetallesCurso implements OnInit{

  activatedRouter = inject(ActivatedRoute);

  id!:number;

  ngOnInit(): void {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    console.log(this.id);
    
  }

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

}
