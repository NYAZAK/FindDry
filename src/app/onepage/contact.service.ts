import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  // FirebaseListObservable 
} from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private afdb: AngularFireDatabase) { }


  sendMessage(message) {
    return this.afdb.list('Message').push(message);
  }
}
