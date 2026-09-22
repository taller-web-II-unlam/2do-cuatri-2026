import type { Empleado } from "./empleado.model.js";

export class Empresa {
    id!:number;
    nombre!:string;
    empleado!: Empleado[]
}