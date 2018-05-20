import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';

@Component({
  selector: 'piece.image',
  templateUrl: './piece.image.component.html',
  styleUrls: ['./piece.image.component.scss']
})
export class PieceImageComponent implements OnInit {
  @Input() piece:Piece;
  constructor() { }

  ngOnInit() {
      
  }

}
