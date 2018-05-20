import { Injectable } from '@angular/core';
import { Piece} from '../piece/models/piece';
import { HttpClient} from '@angular/common/http';
import { Poly } from './models/poly';

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
                name:"imagePiece", text:null, type:"image",content:"/Users/jimmy/Documents/web-workspace/website/client/src/assets/images/forest.jpg",
                style:{},
                id:"0"    
            },
            {
                name:"textPiece", text:null, type:"text", content:"Here is some random text",style: null, id:"1"
            },
            {
                name:"headingPiece", text:null, type:"heading", content:"Random heading text", style:null, id:"2"
            },
            {
                name:"linkPiece", text:"bananas", type:"link", "content":"http://www.google.com", style:null, id:"3"
            } 
        ]
        }
        return this.poly;
    }
    public updatePoly(piece:Piece){
        return this.http.post<Piece>(this.updatePolyUrl, this.poly);
    }
    private callPolyUrl(){
        return this.http.get<Piece>(this.updatePolyUrl);
    }

}