import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos:Ingreso[]=[]; //importamos la clase Ingreso y Egreso
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){
  //inicializar los atributos de la clase del arreglo de Ingreso
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egreso;
  }

  //para tener el ingresoTotal, el egresoTotal, se modificarán dinámicamente
  getIngresoTotal(){
    let ingresoTotal:number=0;
    //recorrer cada uno de los elementos de ingreso y sumarlos a ingresoTotal
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    });
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    //recorrer cada uno de los elementos de ingreso y sumarlos a ingresoTotal
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  //porcentaje del egreso comparado con el ingreso
  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }

}
