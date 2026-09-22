import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoNuevo } from "./hijo-nuevo/hijo-nuevo";
import { HijoViejo } from './hijo-viejo/hijo-viejo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoNuevo, HijoViejo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-input-output');

  nombre = 'Joel';

  nombreSignal = signal<string>('Joel');

  actualizarNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }


  actualizarNombreSignal(nuevoNombre: string) {
    this.nombreSignal.set(nuevoNombre);
  }

}
