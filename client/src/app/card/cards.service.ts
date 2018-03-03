import {Injectable} from '@angular/core';
import {Item} from '../../model/item'
import {ItemService} from '../item-detail/item.service';

@Injectable()
export class CardsService{
	arr:Item[] = new Array();
	constructor(private itemService:ItemService ) {

	}

	getAllItemsInfo(){
		var self = this;
		console.log(this.arr);
		console.log("All Items Info");
		this.itemService.getAllItems().subscribe(items=>{
			items.forEach((item)=>{
				console.log(item.id);

				this.itemService.getItemById(item.id).subscribe(item=> {
					console.log(item);
					self.arr.push(item);
				})
			});

		})
	}

	getItems():Item[]{
		return this.arr;
	}
}
