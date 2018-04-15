import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import { NavbarService } from './components/navbar/navbar.service';
import {CommonModule} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    CommonModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [NavbarService],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
