import { Component, OnInit } from '@angular/core';
import {ItemService} from './item.service';
import { Item } from '../../model/item';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';




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

  constructor(private itemService:ItemService,
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
