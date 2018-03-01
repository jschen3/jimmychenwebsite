import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {
  }

  getItemById(){
    return this.http.get<Item>('http://localhost:3000/getItemById/55500575');
  }

}
