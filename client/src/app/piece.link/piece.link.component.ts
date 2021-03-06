import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';
import { PieceInterface } from '../piece/piece.interface';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'piece.link',
  templateUrl: './piece.link.component.html',
  styleUrls: ['./piece.link.component.scss']
})
export class PieceLinkComponent implements PieceComponent {
  @Input() piece:Piece;
  constructor() { }

}
