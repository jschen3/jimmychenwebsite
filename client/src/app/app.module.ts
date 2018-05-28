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
import { PiecePictureComponent } from './piece.picture/piece.picture.component';
import { PieceTextComponent } from './piece.text/piece.text.component';
import { PieceLinkComponent } from './piece.link/piece.link.component';
import {PolyComponent} from './poly/poly.component'
import { PieceComponent } from './piece/piece.component';
import { Poly } from './poly/models/poly';
import {Piece} from './piece/models/piece';
import { PolyService } from './poly/poly.service';
@NgModule({
  declarations: [
    AppComponent, NavbarComponent, EditNavbarComponent, PiecePictureComponent, PieceTextComponent, PieceLinkComponent,PolyComponent],
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
  providers: [NavbarService, PolyService],
  bootstrap: [AppComponent, NavbarComponent, EditNavbarComponent, PolyComponent, PiecePictureComponent, PieceTextComponent, PieceLinkComponent]
})
export class AppModule { }
