import { Component, signal } from '@angular/core';

interface Tecla {
  teclaNombre: string;
  numeroSonido: number;
  color: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app-piano');

  teclados: Tecla[] = [
    { teclaNombre: 'Tecla 1', numeroSonido: 1, color: 'red' },
    { teclaNombre: 'Tecla 2', numeroSonido: 2, color: 'yellow' },
    { teclaNombre: 'Tecla 3', numeroSonido: 3, color: 'blue' },
    { teclaNombre: 'Tecla 4', numeroSonido: 4, color: 'violet' },
    { teclaNombre: 'Tecla 5', numeroSonido: 5, color: 'brown' },
    { teclaNombre: 'Tecla 6', numeroSonido: 6, color: 'turquoise' },
    { teclaNombre: 'Tecla 7', numeroSonido: 7, color: 'black' },
  ];

  aplicarSonido(numeroTeclado: number) {
    console.log(numeroTeclado);

    const audio = new Audio();

    audio.src = 'sonidos/note' + numeroTeclado + '.mp3';
    audio.load();
    audio.play();
  }
}
