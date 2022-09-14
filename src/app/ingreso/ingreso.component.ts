import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  //necesitamos acceder al arreglo de cada uno de los elementos del arreglo de ingresos
  ingresos:Ingreso[]=[];

  //inyectamos una instacia
  constructor(private ingresoServicio:IngresoServicio) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingresos;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso); //eliminar pasandole la referencia del ingreso que se haya seleccionado para eliminar
  }

}
