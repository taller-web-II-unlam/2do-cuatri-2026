import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-viejo',
  imports: [],
  templateUrl: './hijo-viejo.html',
  styleUrl: './hijo-viejo.css',
})
export class HijoViejo {

    // INPUT CLÁSICO
  @Input() nombre!: string;

  // OUTPUT CLÁSICO
  @Output() nombreChange = new EventEmitter<string>();

  cambiarNombre() {
    this.nombreChange.emit('Pedro');
  }


}
