import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Piece } from '../piece/models/piece';

@Component({
  selector: 'piece.heading',
  templateUrl: './piece.heading.component.html',
  styleUrls: ['./piece.heading.component.scss']
})
export class PieceHeadingComponent implements OnInit {
  @Input() piece:Piece;
  constructor(public componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit() { 
      
  }

}
