import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'piece.text',
  templateUrl: './piece.text.component.html',
  styleUrls: ['./piece.text.component.scss']
})
export class PieceTextComponent implements PieceComponent {
  @Input() piece:Piece;
  constructor() { }
}
