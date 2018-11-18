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
    this.getProfil();
   }

  saveProfil() {
    firebase.database().ref(`UserProfil`).set(this.myprofil);
  }

  getProfil() {
   return this.profil$ =  this.afdb.list(`UserProfil`).valueChanges(); 
    // firebase.database().ref('/UserProfil')
    // .on('value', (data: DataSnapshot) => {
    //   this.myprofil = data.val() ? data.val() : console.log('pas de données');

    // })
    // console.log('gertpers', this.userId);
    //   return this.afdb.list(`/UserProfil`).snapshotChanges().pipe(map(infos => 
    //    infos.map(info => 
    //    ({ key: info.key, ...info.payload.val() }))));
  }

  CreateAccount(newProfil: Profil) {
    this.afdb.list('/UserProfil').push(newProfil);
 
  }

  removeUser() {
    firebase.database().ref('/UserProfil').remove();
  }


  
}
