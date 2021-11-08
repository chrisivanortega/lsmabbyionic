import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.page.html',
  styleUrls: ['./abc.page.scss'],
})
export class AbcPage implements OnInit {

  letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','nn','o','p','q','r','s','t','u','v','w','x','y','z']
  constructor(public alertController: AlertController) { }
  async moreinfo(letra:string){

    const alert = await this.alertController.create({      
      header: letra.toUpperCase(),      
      message: '<img src="/assets/lsm_abc/'+letra+'.png">',
      buttons: ['Cerrar']
    });

    await alert.present();

    console.log(letra)

  }
  ngOnInit() {
  }

}
