import { Empleado } from "../../../../modules/empleados/interfaces/empleado.interface";
import { EmpleadosRest } from "./empleado.interface.rest";

export class EmpleadoMapper {

    static mapRestEmpleadoToEmpleadoFront(empleadoRest: EmpleadosRest): Empleado {
        return {
            id: empleadoRest.id,
            nombre: empleadoRest.nombre,
            apellido: empleadoRest.apellido,
            empresa: empleadoRest.empresa,
            id_empresa: empleadoRest.id_empresa
        }
    }

    static mapRestEmpleadoArrayToEmpleadoArrayFront(empleadoRest: EmpleadosRest[]): Empleado[] {
        return empleadoRest.map(this.mapRestEmpleadoToEmpleadoFront);
    }

}