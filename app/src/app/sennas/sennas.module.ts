import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SennasPageRoutingModule } from './sennas-routing.module';

import { SennasPage } from './sennas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SennasPageRoutingModule
  ],
  declarations: [SennasPage]
})
export class SennasPageModule {}
