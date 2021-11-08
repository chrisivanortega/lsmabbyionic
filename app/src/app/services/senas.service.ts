import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenasService {


    
  senas:any = []
  preguntas:any = []
  
  constructor() {

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

    const r = fetch('./assets/senas.json');
    r.then((response) => response.json())
    .then((data) => {      
      this.senas = data.senas      
      
    })
    
  }

  async getPreguntas(){
    const r = fetch('./assets/preguntas.json');
    r.then((response) => response.json())
    .then((data) => {         
      
      this.preguntas = data.preguntas
      
      
    })
  }


}
