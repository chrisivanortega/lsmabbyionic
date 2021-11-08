import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbcPageRoutingModule } from './abc-routing.module';

import { AbcPage } from './abc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbcPageRoutingModule
  ],
  declarations: [AbcPage]
})
export class AbcPageModule {}
