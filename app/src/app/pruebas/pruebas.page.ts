import { Component, OnInit } from '@angular/core';
import { SenasService } from '../services/senas.service';
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})


export class PruebasPage implements OnInit {
  preguntas: any = []
  senas:any = []


  constructor(private senasService: SenasService) {
    

  }
  


  ngOnInit() {
    
    this.senasService.getPreguntas().subscribe( data=>{this.preguntas = data})
    this.senasService.getSenas().subscribe( data=>{this.senas = data})

    
    
    
  }

}
