import { Component,EventEmitter,Input,Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  titulo="Ingresa números"
  //declaracion de variables
  numero1!:number;
  numero2!:number;
  resultado!:number;
  operador!:String;
  deshabilitar=true;
  validacion!:String;
  bg!:string;
  //salida de datos hacia el modulo resultado
  @Output() onResultado=new EventEmitter<Number>();
  //entrada de datos desde el modulo resultado
  @Input() numborrarResultado!:Number;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarNumero();
  }

  operacion(oper:String){
    
    if(oper=="+"){
      this.operador=oper;
      this.calcular(this.numero1,this.numero2,oper);
      this.deshabilitar=false;
    }else if(oper=="+"){
      this.operador=oper;
      this.calcular(this.numero1,this.numero2,oper);
      this.deshabilitar=false;
    }else if(oper=="-"){
      this.operador=oper;
      this.calcular(this.numero1,this.numero2,oper);
      this.deshabilitar=false;
    }else if(oper=="/"){
      this.operador=oper;
      this.calcular(this.numero1,this.numero2,oper);
      this.deshabilitar=false;
    }else if(oper=="*"){
      this.operador=oper;
      this.calcular(this.numero1,this.numero2,oper);
      this.deshabilitar=false;
    }else if(oper=="="){
      this.validacionNumero();
      this.calcular(this.numero1,this.numero2,this.operador);

      //console.log(""+ this.numero1+ this.operador + this.numero2);
    }else{
      console.log("error" + oper);
    }
    if(Number.isNaN(this.resultado)){
      this.resultado=0;
    }else{
      this.onResultado.emit(this.resultado);
    }
  }
  calcular(num1:number, num2:number,ope:String){
    if(ope=="+"){
      this.resultado=Number(num1) + Number(num2) ;
      
    }else if(ope=="+"){
      this.resultado=Number(num1) + Number(num2) ;
      
    }else if(ope=="-"){
      this.resultado=Number(num1) - Number(num2) ;
      
    }else if(ope=="/"){
      this.resultado=Number(num1) / Number(num2) ;
      
    }else if(ope=="*"){
      this.resultado=Number(num1) * Number(num2) ;
     
    }
  }
  validacionNumero(){
    
    if(this.numero1==null || this.numero1==0 || this.numero1==undefined){
      this.validacion="Porfavor Ingresa el número 1";
      this.bg="bg-danger";
      this.deshabilitar=true;
      return
    }else if(this.operador=="" || this.operador==null || this.operador==undefined ||this.operador=="="){
        this.validacion="Porfavor Selecciona una operacion";
        this.bg="bg-warning";
        this.deshabilitar=true;
        return  
    }else if(this.numero2==null || this.numero2==0 || this.numero1==undefined){
        this.validacion="Porfavor Ingresa el número 2";
        this.bg="bg-danger";
        return
    }else{
      this.validacion="";
      this.bg="";
    }
    
  }
  actualizarNumero(){
    if(this.numborrarResultado==0 && this.operador==""){
      this.operador="";
      this.numero1=0;
      this.numero2=0;
      console.log("entroa")
    }else if(this.numborrarResultado==0 && this.operador!=""){
      this.operador="";
      this.numero1=0;
      this.numero2=0;
      console.log("entrob")
    }else{
      this.numero1=this.numero1;
      this.numero2=this.numero2;
      console.log("entroc")
    }
  }

}


