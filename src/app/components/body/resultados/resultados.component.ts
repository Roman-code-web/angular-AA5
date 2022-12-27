import { Component , EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
numeroBorrar!:Number;
@Input() recibirResultado!:Number;
@Output() onBorrar= new EventEmitter<Number>();


borrarResultados(){
  this.recibirResultado=0;
  this.numeroBorrar=Number("");
  this.onBorrar.emit(this.numeroBorrar);
}
}
