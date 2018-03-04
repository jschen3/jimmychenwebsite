import { Component, OnInit } from '@angular/core';
import {FormsModule, FormControl, Validators, FormGroup} from '@angular/forms';
import {CheckoutDetails} from '../../model/checkout-details';
import {Item} from '../../model/item'
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CheckoutService} from './checkout.service';
import {ItemService} from '../item-detail/item.service';
import { DatePipe } from '@angular/common';
import { ShareButtons } from '@ngx-share/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers:[DatePipe]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  model:CheckoutDetails = new CheckoutDetails();
  item: Item;
  id: number;
  quantity: number;
  current_price:number;
  vouch_price:number;
  image_small:string;
  itemObservable: Observable<Item>;
  vouch_id:string;
  vouch_price_total:number;
  current_price_total:number;
  vouch_qty:number;
  expiry: string;
  poll:any;
  constructor(private checkoutService:CheckoutService,
    private route: ActivatedRoute,
    private router: Router, private itemService:ItemService,
  private datePipe: DatePipe,
  public share: ShareButtons,
  private modalService: NgbModal) {   
  };
  text: any = { Days: "Days", Hours: "Hours",
  Minutes: "Mins", Seconds: "Sec"};

  ngOnInit() {
    this.route.params.subscribe( params =>{
    this.id = params['id'];
    this.model.quantity = params['qty'];
    this.getItemById();
    console.log("model quantity:" +this.model.quantity);
    console.log("current price:" + this.current_price);
    console.log("vouch price:" + this.vouch_price);
    this.getVouchCount();
    });

  }
  getItemById(){
    console.log(this.id);
     this.checkoutService.getItemById(this.id).subscribe((data)=>{
       this.item = data;
       console.log(this.item);
       this.current_price= parseFloat(this.item.current_price);
       this.vouch_price = parseFloat(this.item.vouch_price);
       this.image_small = this.item.image_small;
       this.vouch_id= this.item.vouch_id;
       this.current_price_total = this.current_price * this.model.quantity;
       this.vouch_price_total = this.vouch_price * this.model.quantity;
       this.expiry = this.datePipe.transform(this.item.voucher_expiration, 'yyyy-MM-dd');
     });
  }
  onSubmit(){
    console.log(this.model);
    this.checkoutService.createUser(this.model).subscribe((data)=>{
      console.log("Data:"+data._id);
      this.checkoutService.vouch(data._id, this.vouch_id, this.model).subscribe((data)=>{
        console.log(data);
        // this.modalService.open("style");
      });
    });
  }

  getVouchCount(){
    console.log('Vouch qantity called');
    this.itemService.getVouchCount(this.id).subscribe(data =>{
      console.log(data);
      this.vouch_qty = Number(data);
      // this.vouch_qty =data;
      console.log(this.vouch_qty);
      this.subscribeToData();
    })
  }

   subscribeToData() {
     console.log(" subscribeToData called", this.poll)
    this.poll = Observable.timer(2000).subscribe(() => this.getVouchCount());
  }


  open(content) {
    this.modalService.open(content);
  }
}
