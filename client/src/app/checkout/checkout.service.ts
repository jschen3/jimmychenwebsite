import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse  } from '@angular/common/http';
import { Item } from '../../model/item';
import { forEach } from '@angular/router/src/utils/collection';
import { CheckoutDetails } from './checkout-details';
import {User} from '../../model/user';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Vouch } from '../../model/vouch';
@Injectable()
export class CheckoutService {
  constructor(private http: HttpClient) {
  }

  getItemById(id){
    // const url = ``
    return this.http.get<Item>(`http://localhost:3000/api/getItemById/${id}`);
  }

  vouch(userId:string, vouchId:string, checkoutDetails:CheckoutDetails){
    let vouch:Vouch = new Vouch(vouchId, userId, checkoutDetails.quantity);
    console.log(vouch);
    return this.http.post('http://localhost:3000/api/userVouch', vouch).pipe(
      catchError(this.handleError));
  }
  createUser(checkoutDetails:CheckoutDetails){
    console.log(checkoutDetails);
    let user:User = new User(checkoutDetails.firstName,checkoutDetails.lastName, checkoutDetails.email, checkoutDetails.address, checkoutDetails.creditCard);
    console.log("User is in createUser:"+ user.emailAddress);
    return this.http.post('http://localhost:3000/api/createUser', user).pipe(
      catchError(this.handleError));
  
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
