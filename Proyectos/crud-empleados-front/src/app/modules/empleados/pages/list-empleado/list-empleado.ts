import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmpleadosService } from '../../../../api/services/empleados/empleados.service';
import { Empleado } from '../../interfaces/empleado.interface';
import { TableModule } from 'primeng/table';
import { TablaEmpleado } from "../../components/tabla-empleado/tabla-empleado";
import { ProgressSpinner } from 'primeng/progressspinner';
import { Spinner } from '../../../../shared/primeng/spinner/spinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-empleado',
  imports: [TableModule, TablaEmpleado, Spinner, ToastModule],
  templateUrl: './list-empleado.html',
  styleUrl: './list-empleado.css',
})
export class ListEmpleado implements OnInit, OnDestroy {

  spinner = signal(true);

  empleados = signal<Empleado[]>([]);

  empleadoService = inject(EmpleadosService)

  destroy$ = new Subject<void>();


  ngOnInit(): void {
    //LLAMAR A EMPLEADOS
    this.listarEmpleados()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  listarEmpleados() {
    this.empleadoService.listEmpleados().pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next: (res: Empleado[]) => {
          this.empleados.set(res)
        },
        error: (error) => {
          console.log("fijate que dio un error pa");
        },
        complete: () => {
          this.spinner.set(false);
          console.log(this.spinner);
        }
      }
    )

  }




}
