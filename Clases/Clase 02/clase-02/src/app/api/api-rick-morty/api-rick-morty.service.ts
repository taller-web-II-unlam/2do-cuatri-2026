import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ApiRickMorty {


  private http = inject(HttpClient);

  getCourses() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
