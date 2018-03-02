import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';

@Injectable()
export class ItemService {
  constructor(private http: HttpClient) {
  }

  getItemById(id){
    // const url = ``
    return this.http.get<Item>(`http://localhost:3000/api/getItemById/${id}`);
  }

  getAllItems(){
    return this.http.get<Item[]>('http://localhost:3000/api/getAllItems');
  }

  getAllItemsInfo(){

  }
}
