import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SenasService } from '../services/senas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})


export class PreguntaPage implements OnInit {

  random_responses_generator(items:any,correcta=0){
    let itemssorted =  items.sort( () => .5 - Math.random() );
    const newArray = itemssorted.slice(0, 3)
    try {
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log(element,correcta)
        if (correcta===element['id']){
          newArray.push(element)
        }
        
        
      }
    } catch (error) {
      
    }

    return newArray
  }
  

  id: string;
  pregunta: any
  random_responses:[]
  respuesta = []
  constructor(private route: ActivatedRoute,private senas:SenasService,private alertController:AlertController) {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.pregunta =  this.senas.getPreguntabyId(this.id)
      this.random_responses = this.random_responses_generator(this.senas.senas,this.pregunta.respuesta )
      
      
      

    });
  
    }
    async presentAlert(message:any,header:any,subHeader:any) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }

    response_click(id:any){
      if(id ===  this.pregunta.respuesta){
        this.presentAlert('<ion-icon name="happy-outline"></ion-icon> Respuesta correcta',"Correcto","pasa a la siguente")
      }else{
        this.presentAlert("Intenta de nuevo","incorrecto","tienes mas intentos")
      }

    }
  ngOnInit() {

  }

}
