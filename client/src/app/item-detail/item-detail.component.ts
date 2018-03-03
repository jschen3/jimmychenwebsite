import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import { Item } from '../../model/item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
// import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  id: number;
  vouch_qty: number;
  private sub: any;
  private poll: any;
  item$: Observable<Item>;
  vouchQty: number[] = [1,2,3,4,5,6,7,8,9,10];
  buyQty: number[] = [1,2,3,4,5,6,7,8,9,10];
  selectedVouchQty: number = 1;
  selectedBuyQty: number = 1;

  constructor(private itemService:ItemService,
    private route: ActivatedRoute,
    public share: ShareButtons,
    private router: Router,) {
      // this.getItemById();
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe( params =>{
      this.id = params['id'];
      this.getItemById();
      this.getVouchCount();
    });
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
    if(this.poll){
      this.poll.unsubscribe();
    }
    
  }

  getItemById(){
    console.log(this.id);
     this.itemService.getItemById(this.id).subscribe((data)=>{
       this.item = data;
       this.vouch_qty = this.item.vouch_qty;
       console.log(this.item);
     });
  }

  getVouchCount(){
    console.log('Vouch qantity called');
    this.itemService.getVouchCount(this.id).subscribe(data =>{
      console.log(data);
      this.item.vouch_qty = Number(data);
      // this.vouch_qty =data;
      console.log(this.vouch_qty);
      this.subscribeToData();
    })
  }

   subscribeToData() {
     console.log(" subscribeToData called", this.poll)
    this.poll = Observable.timer(2000).subscribe(() => this.getVouchCount());
  }

  changeRoute(){
    console.log(this.selectedVouchQty);
    this.router.navigate(['/checkout', this.id, this.selectedVouchQty]);
  }

}
