import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';
import {CommonModule} from '@angular/common';
import { EditNavbarComponent } from './navbar/edit.navbar.component';
import {AceEditorModule} from 'ng2-ace-editor';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent, EditNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    CommonModule,
    AceEditorModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [NavbarService],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
