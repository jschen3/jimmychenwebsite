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
  @ViewChild('poly', { read: ViewContainerRef }) polyViewContainerRef:ViewContainerRef;
  poly:Poly;
  constructor(private polyService:PolyService, public pieceComponentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() {
    this.poly = this.polyService.getPoly();
    let pieceComponents = this.polyService.getPieceComponents(this.poly);
    for(let piece of pieceComponents){
      let pieceFactory = this.pieceComponentFactoryResolver.resolveComponentFactory(piece.component);
      let pieceComponent = this.polyViewContainerRef.createComponent(pieceFactory);
      pieceComponent.instance.piece = piece.piece;

    }
  }

}
