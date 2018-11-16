import { Injectable } from '@angular/core';

import {AngularFireDatabase,
  // FirebaseListObservable 
} from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class ContactService {

  constructor(public afdb: AngularFireDatabase) { }
  sendMessage(message) {
    return this.afdb.list('MessageContacts').push(message);
  }
}
