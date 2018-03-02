import {Component, Input, OnInit} from '@angular/core';
import {Item} from './item'
import {CardsService} from './cards.service';

@Component({
    selector:'cards-container',
    templateUrl:'cards.component.html',
    providers:[CardsService],
    styleUrls: ['./cards.component.scss']
})
export class CardsContainer implements OnInit{
    cards:Item[];
    constructor(private cardService:CardsService){
    console.log("Hello");
      this.cardService.getAllItemsInfo();
    }
    ngOnInit(){
        this.cards=this.cardService.getItems();
    }


}
