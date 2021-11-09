import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenasService {


    
  senas:any = []
  preguntas:any = []
  
  constructor(private httpClient: HttpClient) {
    this.getSenas().subscribe(data => this.senas = data)
    this.getPreguntas().subscribe(data => this.preguntas = data)
   }


  getRespuesById(id:any){
    
    for (let index = 0; index < this.senas.length; index++) {
      
      const element = this.senas[index];
      if (element.id == id){
        return element
      }
      
    }
  }

  getPreguntabyId(id:any){
    
    
    for (let index = 0; index < this.preguntas.length; index++) {
      
      const element = this.preguntas[index];
      
      if (element.id == id){
        return element
      }
      
    }
  }
  getSenas(){
    return this.httpClient.get('./assets/senas.json');
  }

  getAbecedario(){
    return this.httpClient.get('./assets/abc.json');
  }

  getPreguntas(){
    return this.httpClient.get('./assets/preguntas.json');
  }
  }
