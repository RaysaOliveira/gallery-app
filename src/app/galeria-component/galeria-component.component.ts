import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent  {
  @Input() titulo = ' ';
  @Input() fotos: string[] = [];
  fotoAtual: number = 0;
  
  next(){
    this.fotoAtual++;
  }
  previous(){
    this.fotoAtual--;
  }

  firstOne(){
    this.fotoAtual = 0;
  }

  lastOne(){
    this.fotoAtual = this.fotos.length-1;
  }

}
