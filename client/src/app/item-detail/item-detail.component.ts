import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import { Item } from '../../model/item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  id: number;
  private sub: any;
  item$: Observable<Item>;

  constructor(private itemService:ItemService,
    private route: ActivatedRoute,
    private router: Router ) { 
      // this.getItemById();
      console.log(this.item$)
  }
  ngOnInit() {
    this.item$ = this.route.paramMap
    .switchMap((params: ParamMap) => {
      // (+) before `params.get()` turns the string into a number
      this.id = +params.get('id');
      console.log(this.id);
      return this.itemService.getItemById(this.id);
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getItemById(){
    console.log(this.id);
     this.itemService.getItemById(this.id).subscribe((data)=>{
       console.log(data);
       this.item = data;
     });

  }

}
