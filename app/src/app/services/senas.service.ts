import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenasService {

  public db_preguntas = [
    {
      id:1,
      categoria:'persona',
      pregunta:'como se dice yo?',
      respuesta:1
    },
    {
      id:2,
      categoria:'persona',
      pregunta:'como se dice tu?',
      respuesta:2
    },
    {
      id:3,
      categoria:'persona',
      pregunta:'como se dice hola?',
      respuesta:3
    }        
  ]

  public db_senas = [
    {
      id:1,
      img:'https://estudiosdesordos.weebly.com/uploads/5/2/9/6/52968719/_6869916.jpg',
      name:'yo',
      desc:'yo',
      move:'1'
  },
  {
    id:2,
    img:'https://estudiosdesordos.weebly.com/uploads/5/2/9/6/52968719/_7233268.jpg',
    name:'tu',
    desc:'tu',
    move:'1'
},
,
  {
    id:3,
    img:'https://estudiosdesordos.weebly.com/uploads/5/2/9/6/52968719/_3285640.jpg',
    name:'hola',
    desc:'hola',
    move:'1'
}  ,
,
  {
    id:4,
    img:'https://estudiosdesordos.weebly.com/uploads/5/2/9/6/52968719/_1496060.jpg',
    name:'nosotros',
    desc:'nosotros',
    move:'1'
}  ,,
{
  id:5,
  img:'https://estudiosdesordos.weebly.com/uploads/5/2/9/6/52968719/_9137483.jpg',
  name:'ustedes',
  desc:'ustedes',
  move:'1'
}  
  ]
    
  
  constructor() { }


  getRespuesById(id:any){
    for (let index = 0; index < this.db_senas.length; index++) {
      const element = this.db_senas[index];
      if (element.id == id){
        return element
      }
      
    }
  }

  getPreguntabyId(id:any){
    for (let index = 0; index < this.db_preguntas.length; index++) {
      const element = this.db_preguntas[index];
      if (element.id == id){
        return element
      }
      
    }
  }
  _senas(){
    return this.db_senas
  }

}
