import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${name.toLowerCase()}`);
  }

}
