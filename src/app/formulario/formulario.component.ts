import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion"; //por defecto está seleccionado '+' que corresponde a ingreso
  descripcionInput:string;
  valorInput:number;

  //inyectar referencia de cada uno de los servicios
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio: EgresoServicio) { }

  ngOnInit(): void {
  }
  tipoOperacion(evento){
    //una vez se de clic al select
    this.tipo = evento.target.value;
  }
  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput)); //añade objeto Ingreso al arreglo ingresos
    else
      this.egresoServicio.egreso.push(new Egreso(this.descripcionInput, this.valorInput));  //si seleccionó '-' añade objeto Egreso al arreglo egresos
  }
}
