import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { Piece } from './models/piece';
import { PieceService } from './piece.service';
import {PieceImageComponent} from '../piece.image/piece.image.component';
import {PieceHeadingComponent} from '../piece.heading/piece.heading.component';
import {PieceTextComponent} from '../piece.text/piece.text.component';
import {PieceLinkComponent} from '../piece.link/piece.link.component';

@Component({
  selector: 'piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss']
})
export class PieceComponent implements OnInit {
  @ViewChild('piece') pieceViewContainerRef:ViewContainerRef;
  @Input() piece:Piece;
  
  constructor(private pieceService:PieceService, public componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    let pieceType = this.piece.type;
    var componentFactory;
    
    switch(pieceType){
      case "image": {
         componentFactory=this.componentFactoryResolver.resolveComponentFactory(PieceImageComponent);
         let imageComponent =this.pieceViewContainerRef.createComponent(componentFactory);
         (<PieceImageComponent>imageComponent.instance).piece = this.piece;
      }
      case "text":{
        componentFactory.resolveComponentFactory(PieceTextComponent);
         let textComponent =this.pieceViewContainerRef.createComponent(componentFactory);
         (<PieceTextComponent>textComponent.instance).piece = this.piece;
      }
      case "heading":{
        componentFactory.resolveComponentFactory(PieceHeadingComponent);
        let headingComponent = this.pieceViewContainerRef.createComponent(componentFactory);
        (<PieceHeadingComponent>headingComponent.instance).piece = this.piece;
      }
      case "link":{
        componentFactory.resolveComponentFactory(PieceLinkComponent);
        let linkComponent = this.pieceViewContainerRef.createComponent(componentFactory);
        (<PieceLinkComponent>linkComponent.instance).piece = this.piece;
      }

    }
    

    
    //depending on the type load the right component, and html pieces.
    //render the piece and the css associated with piece stored in the css object of the piece
  }

}
