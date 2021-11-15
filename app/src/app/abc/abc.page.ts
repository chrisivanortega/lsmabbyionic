import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SenasService } from '../services/senas.service';
@Component({
  selector: 'app-abc',
  templateUrl: './abc.page.html',
  styleUrls: ['./abc.page.scss'],
})
export class AbcPage implements OnInit {

  letras:any =[]
  oracion:any = []

  constructor(public alertController: AlertController,private senas: SenasService) { }
  async moreinfo(letra:string){

    const alert = await this.alertController.create({      
      header: letra.toUpperCase(),      
      message: '<img src="/assets/lsm_abc/'+letra+'.png">',
      buttons: ['Cerrar']
    });

    await alert.present();

    

  }
  ngOnInit() {
    this.senas.getAbecedario().subscribe((data)=>{this.letras = data})
    
  }

  buildPhrase(input:any) {
    
    let sennas =this.letras
    this.oracion = [...input.target.value]
  }

}
