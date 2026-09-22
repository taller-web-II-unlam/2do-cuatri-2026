import type { Empleado } from "../models/empleado.model.js";
import type { EmpleadoRepository } from "../repository/empleado.repository.js"

export class EmpleadoService {


    constructor(private empleadoRepository: EmpleadoRepository) { }

    async obtenerEmpleados() {
        return await this.empleadoRepository.findAllEmpleados();
    }

    async obtenerEmpleado(id: number) {
        return await this.empleadoRepository.findEmpleadoById(id)
    }

    async crearEmpleado(empleado: Empleado) {

        const { nombre, apellido, id_empresa } = empleado

        if (!nombre || typeof nombre !== "string") {
            throw new Error('El nombre es obligatorio y debe ser un string')
        }
        if (!apellido || typeof apellido !== "string") {
            throw new Error('El apellido es obligatorio y debe ser un string')
        }

        if (id_empresa !== undefined && isNaN(Number(id_empresa))) {
            throw new Error("id_empresa debe ser un número valido")
        }

        return await this.empleadoRepository.createEmpleado({ nombre, apellido });
    }

    async updateEmpleado(id:number, data: {nombre:string,apellido:string, id_empresa?:number}) {
        return await this.empleadoRepository.updateEmpleado(id, data)

    }

    async deleteEmpleado(id: number) {
        try {
            return await this.empleadoRepository.deleteEmpleado(id)
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new Error('EmpleadoNoExiste')
            }

            throw error;
        }
    }

}