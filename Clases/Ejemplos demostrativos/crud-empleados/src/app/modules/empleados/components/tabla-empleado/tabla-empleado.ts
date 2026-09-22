import { Component, inject, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Empleado } from '../../interfaces/empleado.interface';
import { Button } from "primeng/button";
import { Router } from '@angular/router';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla-empleado',
  imports: [TableModule, Button],
  templateUrl: './tabla-empleado.html',
  styleUrl: './tabla-empleado.css',
})
export class TablaEmpleado {

  router = inject(Router)
  empleadosService = inject(EmpleadosService);

  empleados = input.required<Empleado[]>();

  eventEmitterTableDeleteEmpleado = output<boolean>();

  messageService = inject(MessageService);

  createEmpleado() {
    this.router.navigate(['empleados/create-empleado']) // empleados/update-empleado/56
  }

  editarEmpleado(empleado: Empleado) {
    this.router.navigate(['empleados/update-empleado', empleado.id]) // empleados/update-empleado/56
  }

  verEmpleado(empleado: Empleado) {
    this.router.navigate(['empleados/detail-empleado', empleado.id]) // empleados/update-empleado/56
  }

  eliminarEmpleado(empleado: Empleado) {

    this.empleadosService.eliminarEmpleado(empleado).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'success', detail: 'Empleado eliminado' });

      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: 'error', detail: 'Empleado eliminado' });
      },
      complete: () => {
        this.eventEmitterTableDeleteEmpleado.emit(true)
      }
    })

  }

}
