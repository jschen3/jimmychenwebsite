import { Injectable } from '@angular/core';
import { Piece} from '../piece/models/piece';
import { HttpClient} from '@angular/common/http';
import { Poly } from './models/poly';
import { PieceInterface } from '../piece/piece.interface';
import { PiecePictureComponent } from '../piece.picture/piece.picture.component';
import { PieceTextComponent } from '../piece.text/piece.text.component';
import { PieceLinkComponent } from '../piece.link/piece.link.component';

@Injectable()
export class PolyService{
    poly:Poly;
    updatePolyUrl:string = "/updatePoly/"
    constructor(private http:HttpClient){

    }
    getPoly():Poly {
        this.poly = {
            name: "allPieceTest",
            id:"0",
            style:null,
            pieces:[{
                name:"imagePiece", text:null, type:"image",content:"../../../../../../assets/images/forest.jpg",
                style:{},
                id:"0"    
            },
            {
                name:"textPiece", text:null, type:"text", content:"Here is some random text", style: null, id:"1"
            },
            {
                name:"headingPiece", text:null, type:"text", content:"Random heading text", style:null, id:"2"
            },
            {
                name:"linkPiece", text:"bananas", type:"link", content:"http://www.google.com", style:null, id:"3"
            } 
        ]
        }
        return this.poly;
    }
    public getPieceComponents(poly:Poly): PieceInterface[] {
        let pieces = poly.pieces;
        var pieceComponents:PieceInterface[] = new Array;
        for(let piece of pieces){
            switch (piece.type){
                case "image":{
                    pieceComponents.push(new PieceInterface(PiecePictureComponent, piece));
                    break;
                }
                case "text":{
                    pieceComponents.push(new PieceInterface(PieceTextComponent, piece));
                    break;
                }
                case "link":{
                    pieceComponents.push(new PieceInterface(PieceLinkComponent, piece));
                    break;
                }
                case "heading":{
                    pieceComponents.push(new PieceInterface(PieceTextComponent, piece));
                    break;
                }
                default:{
                    break;
                }
            }
        }
        return pieceComponents;
    }
    public updatePoly(piece:Piece){
        return this.http.post<Piece>(this.updatePolyUrl, this.poly);
    }
    private callPolyUrl(){
        return this.http.get<Piece>(this.updatePolyUrl);
    }

}