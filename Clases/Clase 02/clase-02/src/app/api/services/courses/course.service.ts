import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Service()
export class CourseService {
  courses = signal([
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



  toggleFavorite(id: number) {
    this.courses.update((courses) =>
      courses.map((course) =>
        course.id === id ? { ...course, favorite: !course.favorite } : course,
      ),
    );
  }

  getCourses(): Observable<any[]> {
    return of(this.courses()).pipe(delay(1000));
  }
}
