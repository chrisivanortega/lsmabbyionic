import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrailePageRoutingModule } from './braile-routing.module';

import { BrailePage } from './braile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrailePageRoutingModule
  ],
  declarations: [BrailePage]
})
export class BrailePageModule {}
