import type { Empleado } from "../models/empleado.model.js";
import { EmpleadoRepository } from "../repository/empleado.repository.js";

export class EmpleadoService {

    constructor(private empleadoRepository: EmpleadoRepository) { }

    async buscarEmpleados() {
        // const empleados:any = [];
        const empleados = await this.empleadoRepository.buscarEmpleados();


        if (empleados.length == 0) {
            throw new Error("No hay empleados")
        }

        return empleados
    }

    async obtenerEmpleado(id: number) {

        const empleado = await this.empleadoRepository.buscarEmpleadoById(id);

        if (!empleado) {
            throw new Error("NoExisteEmpleado")
        }

        return empleado
    }

    async crearEmpleado(empleado: Empleado) {
        const { nombre, apellido, id_empresa } = empleado

        return await this.empleadoRepository.crearEmpleado({ nombre, apellido })
    }

    async actualizarEmpleado(id: number, data: Empleado) {
        return await this.empleadoRepository.actualizarEmpleado(id, data)
    }

    async eliminarEmpleado(id: number) {
        try {
            return await this.empleadoRepository.eliminarEmpleado(id);
        } catch (error: any) {
            if (error.code = "P2025") {
                throw new Error("NoExisteEmpleado")
            }

            throw error;
        }
    }

}