import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import {PolyService} from './poly.service';
import { Poly } from './models/poly';
import { PieceComponent } from '../piece/piece.component';
import { Piece } from '../piece/models/piece';
@Component({
  selector: 'poly',
  templateUrl: './poly.component.html',
  styleUrls: ['./poly.component.scss']
})
export class PolyComponent implements OnInit {
  @ViewChild('poly') polyViewContainerRef:ViewContainerRef;
  poly:Poly;
  constructor(private polyService:PolyService, public pieceComponentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.poly = this.polyService.getPoly();
    
    for(let piece in this.poly.pieces){
      let pieceFactory = this.pieceComponentFactoryResolver.resolveComponentFactory(PieceComponent);
      let pieceComponent = this.polyViewContainerRef.createComponent(pieceFactory);
      pieceComponent.instance.piece = JSON.parse(piece) as Piece;

    }
  }

}
