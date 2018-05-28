import {Piece} from '../../piece/models/piece';
import { PieceComponent } from '../../piece/piece.component';
import { PieceInterface } from '../../piece/piece.interface';
export class Poly{
    constructor(
        public name:string,
        public pieces:Piece[],
        public style:any,
        public id:string
    ) {}
}