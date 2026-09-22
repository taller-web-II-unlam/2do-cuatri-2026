import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../../../api/services/courses/course.service';
import { Observable, of } from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-courses-list',
  styleUrl: './courses-list.css',
  templateUrl: './courses-list.html',
})
export class CoursesList {
  title = 'Gestor de Cursos';

  search = '';

  selectedCourse = signal<Course | null>(null);

  courseService = inject(CourseService);

  courses = signal<Course[]>([])

  courseCount = computed(() => this.courses().length);

  favoriteCourses = computed(() => this.courses().filter((course) => course.favorite));

  effect = effect(() => {
    console.log('Curso seleccionado:', this.selectedCourse());
  });

  selectCourse(course: Course) {
    this.selectedCourse.set(course);
  }

  toggleFavorite(id: number) {
    this.courseService.toggleFavorite(id);
  }

  loadCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      console.log('Cursos recibidos:', courses);
    });
  }
}
