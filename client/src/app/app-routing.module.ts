import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {CardsContainer} from './card/card.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'item/:id', component: ItemDetailComponent },
  { path: '', component: CardsContainer, pathMatch: 'full' },
  { path: 'checkout', component:CheckoutComponent, pathMatch: 'full' },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
