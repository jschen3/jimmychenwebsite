import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import {CardsContainer} from './card/card.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemService } from './item-detail/item.service';





@NgModule({
  declarations: [
    AppComponent, CardsContainer,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
