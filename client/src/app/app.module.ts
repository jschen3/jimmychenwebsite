import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from '@ngx-share/core';

import { AppComponent } from './app.component';
import {CardsContainer} from './card/card.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemService } from './item-detail/item.service';
import {CheckoutComponent} from './checkout/checkout.component';
import {FormsModule} from '@angular/forms'
import {CheckoutService} from './checkout/checkout.service';

import {CountDown} from "ng2-date-countdown";

@NgModule({
  declarations: [
    AppComponent, CardsContainer,
    ItemDetailComponent,CheckoutComponent,CountDown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ShareModule.forRoot(),
    RoundProgressModule,
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ItemService,CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
