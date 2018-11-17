import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable, Subject} from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Contact } from "./contact.interface";

@Injectable({
  providedIn: 'root'
})
export class ProfilserviceService {
  user$ : Observable<firebase.User> = null;
  userId: string;
  subject = new Subject();
  user: Contact;
  constructor(public afdb: AngularFireDatabase, public angularfa: AngularFireAuth) { 
    this.user$ = angularfa.authState;
    this.angularfa.authState.subscribe(user =>
       {if(user) {
         this.userId = user.uid
         console.log()
       }})
  }
  
    getPersonalInfo(){
      return this.afdb.list(`InfoPersonal/${this.userId}`).snapshotChanges().pipe(map(infos => 
       infos.map(info => 
       ({ key: info.key, ...info.payload.val() }))));
     }

     saveInfo(info){
      return  this.afdb.list(`InfoPersonal/${this.userId}`).push(info);
        // console.log('uid',  this.userId);  
        //  firebase.database().ref(`InfoPersonal/${this.userId}`).push(info); 
      
    }

    editInfo(info) {
      this.subject.next(info);
    }

    majMyInfo(info){
      return this.afdb.object(`InfoPersonal/${this.userId}/${info.key}`).update(info);
    }
}
