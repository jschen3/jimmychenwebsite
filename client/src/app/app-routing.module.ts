import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemDetailComponent} from './item-detail/item-detail.component';

const routes: Routes = [
  { path: 'item', component: ItemDetailComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
