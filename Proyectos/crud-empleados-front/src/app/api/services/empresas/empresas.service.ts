import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {


  empresas: any = [
    {
      id: 1,
      nombre: "UNLaM"
    },
    {
      id: 2,
      nombre: "UTN"
    }
  ]
  http = inject(HttpClient)


  listEmpresas() {
    return of(this.empresas).pipe(
      map((res)=>{
        return res;
      })
    )
  }


}
