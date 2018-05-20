import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';

@Component({
  selector: 'piece.text',
  templateUrl: './piece.text.component.html',
  styleUrls: ['./piece.text.component.scss']
})
export class PieceTextComponent implements OnInit {
  @Input() piece:Piece;
  constructor() { }
    
  ngOnInit() {
  }

}
