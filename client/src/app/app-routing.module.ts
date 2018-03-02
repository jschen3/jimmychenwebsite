import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {CardsContainer} from './card/card.component';

const routes: Routes = [
  { path: 'item/:id', component: ItemDetailComponent },
  { path: '', component: CardsContainer, pathMatch: 'full' },
  // { path: '', redirectTo: '/cards', pathMatch: 'full' },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
