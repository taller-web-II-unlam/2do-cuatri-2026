import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('app-signals');

  // SIGNAL -> estado reactivo
  contador = signal<number>(0);

  // COMPUTED -> valor derivado
  doble = computed(() => this.contador() * 2);

  // EFFECT -> se ejecuta cuando cambia la signal
  efecto = effect(() => {
    console.log('El contador cambió:', this.contador());
  });

  constructor() {
    console.log('ejecutado 1');

  }

  ngOnInit(): void {
    console.log('ejecutado 2');
  }

  ngOnDestroy(): void {
    console.log('ejecutado 3');
    this.efecto.destroy();
  }

  incrementar() {
    this.contador.update((valor) => valor + 1);
  }

  decrementar() {
    this.contador.update((valor) => valor - 1);
  }
}
