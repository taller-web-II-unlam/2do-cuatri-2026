import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Empleado } from '../../../modules/empleados/interfaces/empleado.interface';
import { environment } from '../../../../environments/environment.development';
import { EmpleadoMapper } from './mapping/empleado.mapper';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {

  empleados: Empleado[] = [
    {
      id: 1,
      apellido: "Lugo",
      nombre: "Matias"
    },
    {
      id: 2,
      nombre: "Gaston",
      apellido: "Escobar"
    }
  ]

  http = inject(HttpClient)


  listEmpleados():Observable<Empleado[]> {
    console.log("entro al servicio");

    return this.http.get<Empleado[]>(`${environment.API_URL}'/empleado`).pipe(
      map((res)=>{
        return EmpleadoMapper.mapRestEmpleadoArrayToEmpleadoArrayFront(res);
      })
    )

    // return of<Empleado[]>(this.empleados).pipe(
    //   map((res) => {
    //     return res;
    //   })
    // )

  }

  eliminarEmpleado(empleado: Empleado) {
    return of([])
  }

  detailEmpleado(id: number):Observable<Empleado> {
    return this.http.get<Empleado>(`${environment.API_URL}'/empleado`).pipe(
      map((res)=>{
        return EmpleadoMapper.mapRestEmpleadoToEmpleadoFront(res);
      })
    )
  }

  crearEmpleado(empleado: Empleado) {
    return of(this.empleados[0])
  }

  updateEmpleado(empleado:Empleado):Observable<Empleado>{
        return of()
  }

}
