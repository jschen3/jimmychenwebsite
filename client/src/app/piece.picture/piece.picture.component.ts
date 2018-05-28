import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';
import { PieceInterface } from '../piece/piece.interface';
import { PieceComponent } from '../piece/piece.component';

@Component({
  selector: 'piece.picture',
  templateUrl: './piece.picture.component.html',
  styleUrls: ['./piece.picture.component.scss']
})
export class PiecePictureComponent implements PieceComponent {
  @Input() piece:Piece;
  constructor() { }

 

}
