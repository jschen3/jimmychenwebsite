import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CheckoutDetails} from './checkout-details';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
  model:CheckoutDetails = new CheckoutDetails();
  constructor() { }

  ngOnInit() {

  }

}
