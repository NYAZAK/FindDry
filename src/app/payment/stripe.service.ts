import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
userid: string;
  constructor(private afdb: AngularFireDatabase, private angularfa: AngularFireAuth) { 
    this.angularfa.authState.subscribe( user =>{
      if(user) this.userid = user.uid
    })
  }

  processPayment(token: any, amont){
    const payment = { token, amont }
    return this.afdb.list(`/payments/${this.userid}`).push(payment);
  }
}
