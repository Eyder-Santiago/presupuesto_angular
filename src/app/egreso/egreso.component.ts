import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model'; //importamos la clase de Egreso
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal:number; //importamos este método, para calular los porcentajes
  //necesitamos acceder al arreglo de cada uno de los arreglos de tipo egresos
  egresos:Egreso[]=[]; 

  //inyectamos una instancia
  constructor(private egresoServicio:EgresoServicio) { }

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egreso;
  }

  //en la clase egresoServicio se encuentra este método
  eliminarRegistro(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
