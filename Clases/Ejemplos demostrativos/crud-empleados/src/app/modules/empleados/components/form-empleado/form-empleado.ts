import { Component, inject, input, OnInit, output, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { EmpresasService } from '../../../../api/services/empresas/empresas.service';
import { SelectModule } from 'primeng/select';
import { Button } from "primeng/button";
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-form-empleado',
  imports: [ReactiveFormsModule, InputTextModule, SelectModule, Button],
  templateUrl: './form-empleado.html',
  styleUrl: './form-empleado.css',
})
export class FormEmpleado implements OnInit {

  title = signal<string>("Crear empleado");

  private fb = inject(FormBuilder);

  form!: FormGroup;

  empresasService = inject(EmpresasService);

  empresas: any = [];

  eventEmitterFormEmpleado = output<Empleado>();

  empleado = input<Empleado>();

  ngOnInit(): void {

    if(this.empleado()){
      this.title.set("Actualizar empleado")
    }
    
    this.form = this.fb.group({
      nombre: [this.empleado()?.nombre, [Validators.required]],
      apellido: [this.empleado()?.apellido, [Validators.required]],
      empresa: [this.empleado()?.empresa]
    })

    this.getEmpresas();
  }

  getEmpresas() {
    this.empresasService.listEmpresas().subscribe(
      {
        next: (res: any) => {
          this.empresas = res
        }, error: (error) => {
          console.log("error pa");
        },
        complete: () => {
        }
      }
    )
  }

  sendEmpleado() {
    console.log("se envio el form");

    const empleado:Empleado = {
      id : 0,
      nombre : this.form.get('nombre')?.value.trim(),
      apellido : this.form.get('apellido')?.value.trim(),
      empresa : this.form.get('empresa')?.value,
    }

    this.eventEmitterFormEmpleado.emit(empleado);
    
  }

}
