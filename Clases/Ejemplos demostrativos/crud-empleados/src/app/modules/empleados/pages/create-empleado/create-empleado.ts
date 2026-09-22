import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { Router, RouterLink } from '@angular/router';
import { Button } from "primeng/button";
import { FormEmpleado } from "../../components/form-empleado/form-empleado";

@Component({
  selector: 'app-create-empleado',
  imports: [Button, RouterLink, FormEmpleado],
  templateUrl: './create-empleado.html',
  styleUrl: './create-empleado.css',
})
export class CreateEmpleado {

  empleadoService = inject(EmpleadosService);

  router: Router = inject(Router);

  createEmpleado(empleado: Empleado) {
    this.empleadoService.crearEmpleado(empleado).subscribe((
      {
        next: (res: Empleado) => {
          console.log("empleado creado");
        }, error: (error) => {
          console.log("error pa");
        },
        complete: () => {
          this.router.navigate(['/empleados/list-empleados']);
        }
      }
    ))
  }




}
