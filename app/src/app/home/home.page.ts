import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage {

  imageSource:any=[{"img":"hola_lsm.jpg","text":"hola bienvenido"},{"img":"home1.jpeg",text:"aprende"},{"img":"not.jpeg","text":"notificas y mas"}]
  id:any = 0
  index:any = 0
  
  constructor(private menu: MenuController,private http: HttpClient) {}

    items: any = []
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  httpCall(){
    this.http.get('https://reqres.in/api/users?page=1')
    .subscribe(data=>{
      
      this.items = data['data']
    })
  }

  changeNews(i:any){
    
    this.index = (i+1)%this.imageSource.length

  }

  ngOnInit() {
    
    
    this.id = setInterval(() => {
    this.changeNews(this.index); 
    }, 10000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }  
  

}
