import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AngularFireDatabase, AngularFireObject, snapshotChanges, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { keyframes } from '@angular/animations';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  allProfils$;
  test;
  allMsgContacts;
  uid;
  result;
  keyuser;
  theKey;
  allusers;
  key;
  constructor(private adS: AdminService, private afdb: AngularFireDatabase, private angularfa: AngularFireAuth) {
    this.angularfa.authState.subscribe(user => {
      if(user) this.test = user.uid; 
    });
 
  }

  ngOnInit() {
    // this.allProfils$ =  this.getprofil(); 
    this.keyuser = firebase.database().ref(`/UserProfil/`).once('value')
    .then(snapshot => {
      snapshot.forEach( (childSnapshot) => {
        const key = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(key, 'key');
       this.keyuser = this.afdb.list(`UserProfil/${key}`).valueChanges();
      }
   )});

   
    // console.log(this.allProfils$, 'all profil');
  //  firebase.database().ref(`/UserProfil/`)
  //   .once('value').then(snapshot => {
  //    snapshot.val();
  //      const res = Object.values(snapshot.val()).map(
  //       (ob) => ob);
  //     console.log(res, 'ici le res');
  //    });

}

  getprof(address, index){

  }
  
  getprofil() {
    return this.adS.getProfilsOfMyUsers(); 
  }

  getMsgContacts(){
    return this.adS.getAllMessagesContacts();
  }
 
  
}
