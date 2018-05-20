import {Piece} from '../../piece/models/piece';
export class Poly{
    constructor(
        public name:string,
        public pieces:Piece[],
        public style:any,
        public id:string
    ) {}
}