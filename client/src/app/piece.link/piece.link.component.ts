import { Component, OnInit, Input } from '@angular/core';
import { Piece } from '../piece/models/piece';

@Component({
  selector: 'piece.link',
  templateUrl: './piece.link.component.html',
  styleUrls: ['./piece.link.component.scss']
})
export class PieceLinkComponent implements OnInit {
  @Input() piece:Piece;
  constructor() { }

  ngOnInit() {
  }

}
