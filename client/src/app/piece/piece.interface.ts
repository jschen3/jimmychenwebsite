import { Piece } from "./models/piece";
import { Type } from "@angular/core";

export class PieceInterface {
    constructor(public component:Type<any>, public piece:Piece ){}
}