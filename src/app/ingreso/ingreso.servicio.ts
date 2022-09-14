//clase de servicio para manejar el ingreso

import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[] = [//se importó clase de ingreso
    new Ingreso("Salario", 4000),
    new Ingreso("Venta Coche", 500)
    ]; 
    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1); //splice elimina el elemento que estamos proporcionando
    }
}









