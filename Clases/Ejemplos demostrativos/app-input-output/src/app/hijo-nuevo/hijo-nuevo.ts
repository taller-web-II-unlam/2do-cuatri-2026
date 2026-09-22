import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo-nuevo',
  imports: [],
  templateUrl: './hijo-nuevo.html',
  styleUrl: './hijo-nuevo.css',
})
export class HijoNuevo {

    // INPUT SIGNAL
  nombre = input.required<string>();

  // OUTPUT MODERNO
  nombreChange = output<string>();

  cambiarNombre() {
    this.nombreChange.emit('Pedro');
  }

}
