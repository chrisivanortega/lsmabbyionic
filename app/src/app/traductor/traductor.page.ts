import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SenasService } from '../services/senas.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {
  oracion:any = []
  sennas:any = []
  constructor(public alertController: AlertController,private senas: SenasService) { }

  sennaExist(senna:String){
    
      
      let r = this.sennas.find(o => o.name === senna)
      if (r){
    
      return true  
      }
      return false
      
    

  }

  moreinfo(item:any){

  }
  buildPhrase(input:any){
    let text = input.target.value
    let tmp = text.split(" ");
    let tmp2 = tmp.filter(String)
    let tmp3 = []
    console.log(tmp2)
    for (let index = 0; index < tmp2.length; index++) {
      const element = tmp2[index];
      if(this.sennaExist(element)){
        tmp3.push(element)
      }else{
        
      }
      
    }
    this.oracion = [...new Set(tmp3)]
    
    






  }

  ngOnInit() {
    this.senas.getSenas().subscribe((data)=>{this.sennas = data})
    
  }

}
