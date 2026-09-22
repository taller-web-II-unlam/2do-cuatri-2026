import { Component } from '@angular/core';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { LibraryService } from '../../../../api/api-library/library.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-library',
  imports: [FormsModule,CommonModule],
  templateUrl: './search-library.html',
  styleUrl: './search-library.css'
})
export class SearchLibrary {

  private searchSubject = new Subject<string>();
  results: any[] = [];

  constructor(private searchService: LibraryService) {
    // Nos suscribimos al subject con debounce + switchMap
    this.searchSubject.pipe(
      debounceTime(500), // espera 500ms tras dejar de escribir
      switchMap(query => this.searchService.searchBooks(query))
    ).subscribe({
      next: (data) => {
        this.results = data.docs.slice(0, 10); // mostramos 10 resultados
      }
    });
  }

  // Método que recibe lo escrito en el input
  onSearch(query: string) {
    if (query.trim() !== '') {
      this.searchSubject.next(query);
    } else {
      this.results = [];
    }
  }

}
