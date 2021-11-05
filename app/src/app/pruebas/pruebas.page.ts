import { Component, OnInit } from '@angular/core';
import { SenasService } from '../services/senas.service';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})


export class PruebasPage implements OnInit {

  constructor(private senas: SenasService) { }
  
  preguntas: any = []

  getSenas(){
    return this.senas.db_senas
  }

  getPreguntas(id:Number){
   
  }
  ngOnInit() {
    this.preguntas = this.senas.db_preguntas
    console.log(this.preguntas)
  }

}
