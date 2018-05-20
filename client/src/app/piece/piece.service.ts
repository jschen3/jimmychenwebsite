import { Injectable } from "@angular/core";
import { Piece } from "./models/piece";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PieceService{
    piece:Piece;
    updatePieceUrl:string = "/updatePiece/"+this.piece.id;
    constructor(private http:HttpClient){
        
    }
    getPiece(): Piece{
        this.piece = {
            name:"sample_image_piece",
            text:null,
            content:"/Users/jimmy/Documents/web-workspace/website/client/src/assets/images/forest.jpg",
            style:{},
            type:"image",
            id:"0"
        }
        return this.piece;
        //this.callPieceUrl().then(navbar=>{this.navbar=navbar});
    }
    public updatePiece(piece:Piece){
        return this.http.post<Piece>(this.updatePieceUrl, this.piece);
    }
    private callPieceUrl(){
        return this.http.get<Piece>(this.updatePieceUrl);
    }
    
}