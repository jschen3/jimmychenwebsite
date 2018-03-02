import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CheckoutDetails} from './checkout-details';
import {Item} from '../../model/item'
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CheckoutService} from './checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
  model:CheckoutDetails = new CheckoutDetails();
  item: Item;
  id: number;
  private sub: any;
  current_price:number;
  vouch_price:number;
  image_small:string;
  itemObservable: Observable<Item>;
  constructor(private checkoutService:CheckoutService,
    private route: ActivatedRoute,
    private router: Router ) { 
      // this.getItemById();
      
  }

  ngOnInit() {
    this.route.params.subscribe( params =>{
    this.id = params['id'];
    this.getItemById();
    });

  }
  getItemById(){
    console.log(this.id);
     this.checkoutService.getItemById(this.id).subscribe((data)=>{
       this.item = data;
       console.log(this.item);
       this.current_price=parseFloat(this.item.current_price);
       this.vouch_price = parseFloat(this.item.vouch_price);
       this.image_small = this.item.image_small;
     });
  }
}
