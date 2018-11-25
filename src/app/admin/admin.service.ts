import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  user$ : Observable<firebase.User> = null;
  profils$;
  msgContacts;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(private angularfa : AngularFireAuth, private afdb: AngularFireDatabase) { 
    this.user$ = angularfa.authState;
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      ) )
  }

  adLogin(email: string, password: string) {
    return this.angularfa.auth.signInWithEmailAndPassword(email, password);
  }

  adSingOut(){
    this.angularfa.auth.signOut();
  }

  getProfilsOfMyUsers() {
      return this.profils$ = this.afdb.list(`UserProfil/`).valueChanges();
  }

  getAllMessagesContacts() {
    return this.msgContacts = this.afdb.list('MessageContacts').valueChanges();
  }
}
