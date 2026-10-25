import { Component, inject, OnInit, LOCALE_ID } from '@angular/core';
import { Button } from "primeng/button";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { FormEmpleado } from "../../components/form-empleado/form-empleado";
import { Empleado } from '../../interfaces/empleado.interface';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';

@Component({
  selector: 'app-update-empleado',
  imports: [Button, RouterLink, FormEmpleado],
  templateUrl: './update-empleado.html',
  styleUrl: './update-empleado.css',
})
export class UpdateEmpleado implements OnInit {

  spinner: boolean = true;
  id!: number;
  empleado!: Empleado;
  activatedRouter = inject(ActivatedRoute);
  empleadoService = inject(EmpleadosService);
  router = inject(Router)


  ngOnInit(): void {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    this.detailEmpleado();
  }

  detailEmpleado() {
    this.empleadoService.detailEmpleado(this.id).subscribe({
      next: (res: Empleado) => {
        this.empleado = res;
      }, error: (error) => {
        console.log("error pa");
      },
      complete: () => {
        this.spinner = false;
      }
    })
  }

  updateEmpleado(empleado: Empleado) {
    this.empleadoService.updateEmpleado(empleado).subscribe((
      {
        next: (res: Empleado) => {
          console.log("empleado actualizado");
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
