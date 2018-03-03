import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/item';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class CheckoutService {
  constructor(private http: HttpClient) {
  }

  getItemById(id){
    // const url = ``
    return this.http.get<Item>(`http://localhost:3000/api/getItemById/${id}`);
  }

  vouch(){

  }
  createUser(){
      
  }

}