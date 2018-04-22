import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//{ path: 'item/:id', component: ItemDetailComponent },
//{ path: '', component: CardsContainer, pathMatch: 'full' },
//{ path: 'checkout/:id/:qty', component:CheckoutComponent },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) 
  ],
  declarations: []
})
export class AppRoutingModule { }
