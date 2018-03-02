import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import { Item } from '../../model/item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
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
  private sub: any;
  item$: Observable<Item>;
  vouchQty: number[] = [1,2,3,4,5,6,7,8,9,10];
  buyQty: number[] = [1,2,3,4,5,6,7,8,9,10];
  selectedVouchQty: number = 1;
  selectedBuyQty: number = 1;

  constructor(private itemService:ItemService,
    private route: ActivatedRoute,
    public share: ShareButtons,
    private router: Router ) {
      // this.getItemById();
  }
  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.id = params['id'];
      this.getItemById();
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getItemById(){
    console.log(this.id);
     this.itemService.getItemById(this.id).subscribe((data)=>{
       this.item = data;
       console.log(this.item);
     });

  }

}
