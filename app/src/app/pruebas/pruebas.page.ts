import { Component, OnInit } from '@angular/core';
import { SenasService } from '../services/senas.service';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})


export class PruebasPage implements OnInit {
  preguntas: any = []
  constructor(private senas: SenasService) {
    
    this.senas.getSenas()
    this.senas.getPreguntas()
    
    this.preguntas = this.senas.preguntas
    
  }
  

  iniciar(){
    this.senas.getSenas()
    this.senas.getPreguntas()    
    this.preguntas = this.senas.preguntas
  }

  getPreguntas(id:Number){
   
  }

  ngOnInit() {


    
    
    
  }

}
