import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../model/item';
import {CardsService} from './cards.service';
import { Router } from "@angular/router";   

@Component({
    selector:'cards-container',
    templateUrl:'cards.component.html',
    providers:[CardsService],
    styleUrls: ['./cards.component.scss']
})
export class CardsContainer implements OnInit{
    cards:Item[];
    constructor(private cardService:CardsService,
    private router:Router){
    //console.log("Hello");
      this.cardService.getAllItemsInfo();
    }
    ngOnInit(){
        this.cards=this.cardService.getItems();
        console.log(this.cards);
    }

    changeRoute(id: string) {
        // this.dataService.data = data;
        this.router.navigate(['/item', id]);
    }
}
