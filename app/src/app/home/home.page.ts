import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})




export class HomePage {
  
  constructor(private menu: MenuController,private http: HttpClient) {}

    items: any = []
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  httpCall(){
    this.http.get('https://reqres.in/api/users?page=1')
    .subscribe(data=>{
      console.log(data)
      this.items = data['data']
    })
  }

}
