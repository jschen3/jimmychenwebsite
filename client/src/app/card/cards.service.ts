import {Injectable} from '@angular/core';
import {Item} from '../../model/item'
import {ItemService} from '../item-detail/item.service';
import * as moment from 'moment';

@Injectable()
export class CardsService{
	arr:Item[] = new Array();
	constructor(private itemService:ItemService ) {

	}

	getAllItemsInfo(){
		var self = this;
		this.itemService.getAllItems().subscribe(items=>{
			items.forEach((item)=>{
				this.itemService.getItemById(item.id).subscribe(item=> {
					console.log(item);
					var today = new Date();
					var a = moment();
					var b = moment(item.voucher_expiration);
					let daysLeft = b.diff(a,  'days')
					console.log('difference in date', daysLeft);
					// var daysLeft = Math.round((new Date(item.voucher_expiration).getTime() - today.getTime())/(60*60*24*1000));
					if (daysLeft<1){
						item.days_left_text = "Expires Today";
					}else if (daysLeft == 1){
						item.days_left_text = "1 day left";
					}else {
						item.days_left_text = daysLeft + " days left";
					}
					self.arr.push(item);
				})
			});

		})
	}

	getItems():Item[]{
		return this.arr;
	}
}
