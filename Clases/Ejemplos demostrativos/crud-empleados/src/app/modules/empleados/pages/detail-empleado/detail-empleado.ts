import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { Spinner } from "../../../../shared/primeng/spinner/spinner";
import { Button } from "primeng/button";

@Component({
  selector: 'app-detail-empleado',
  imports: [Spinner, Button, RouterLink],
  templateUrl: './detail-empleado.html',
  styleUrl: './detail-empleado.css',
})
export class DetailEmpleado implements OnInit {

  spinner = true;
  id!: number;
  empleado!:Empleado
  activatedRouter = inject(ActivatedRoute)

  empleadoService = inject(EmpleadosService)

  ngOnInit(): void {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'))
    this.detailEmpleado()
  }

  detailEmpleado() {
    this.empleadoService.detailEmpleado(this.id).subscribe({
      next :(res:Empleado) =>{
        this.empleado = res;
      }, error : (error)=>{
        console.log("error pa");
      },
      complete : () =>{
        this.spinner = false;
      }
    })
  }

}
