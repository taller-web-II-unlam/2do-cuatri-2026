import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {


  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}${query}`);
  }

}
