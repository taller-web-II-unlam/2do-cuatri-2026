import type { Empresa } from "./empresa.model.js";

export class Empleado {


    id!:number;
    nombre!:string;
    apellido!:string;
    id_empresa!:number;
    empresa!:Empresa;
}