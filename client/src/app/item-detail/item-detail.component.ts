import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import { Item } from '../../model/item';



@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  constructor(private itemService:ItemService ) {
    this.getItemById();
  }
  ngOnInit() {

  }

  getItemById(){
     this.itemService.getItemById("123").subscribe((data)=>{
       console.log(data);
       this.item = data;
     });

  }

}
