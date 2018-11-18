import { Injectable } from '@angular/core';
import { Profil } from './profil.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  
  myprofil: Profil;
  profilSubject = new Subject<Profil[]>();
  userId: string;
  profil$;

  constructor(private angularfa: AngularFireAuth, private afdb: AngularFireDatabase) { 
    this.angularfa.authState.subscribe(user =>
      {if(user) {
        this.userId = user.uid
        console.log(this.userId);
      }})
    this.getProfil(this.userId);
   }

  saveProfil(id) {
    firebase.database().ref(`/UserProfil/${id}`).set(this.myprofil);
  }

  getProfil(id) {
   return this.profil$ =  this.afdb.list(`UserProfil/${id}`, ref => ref.limitToLast(1)).valueChanges(); 
  }

  CreateAccount(newProfil: Profil,id) {
    this.afdb.list(`/UserProfil/${id}`).push(newProfil);
 
  }

  removeUser(id:number) {
    firebase.database().ref(`/UserProfil/${this.userId}/${id}`).remove();
  }


  
}
