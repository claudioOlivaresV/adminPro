import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  // @Input('valor') progreso: number = 50;
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary'
  @Output() valorSalida: EventEmitter<number> = new EventEmitter;
 




  cambiarValor(valor: number) {
    if(this.progreso >= 100 && valor >=0 ) {
       this.progreso = 100;
       this.valorSalida.emit(100);
       return;
    }
    if(this.progreso <= 0 && valor < 0 ) {
       this.progreso = 0;
       this.valorSalida.emit(0);
       return;
    }
    this.progreso = this.progreso + valor
    this.valorSalida.emit(this.progreso);    
  }

}
