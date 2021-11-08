import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrailePage } from './braile.page';

const routes: Routes = [
  {
    path: '',
    component: BrailePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrailePageRoutingModule {}
