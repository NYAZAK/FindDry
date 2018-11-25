import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AngularFireDatabase, AngularFireObject, snapshotChanges, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private adS: AdminService, private afdb: AngularFireDatabase, private angularfa: AngularFireAuth) {
    this.uid = this.angularfa.authState;
  }

  ngOnInit() {
    var userId = firebase.auth().currentUser.uid;
   this.allProfils$ = this.getprofil(); 
   firebase.database()
    .ref(`/UserProfil/${userId}`)
    .once('value')
    .then(snapshot => {
      console.log('snapshotval', snapshot.val());
      const name = snapshot.val().name;
      console.log(name, 'nom;');
        snapshot.val();
        // snapshot.val()['Test1 Lab'].Name
     })

}
   
  

  
  getprofil() {
   return this.adS.getAllMessagesContacts();
   
  }

  getMsgContacts(){
    return this.adS.getAllMessagesContacts();
  }
 
}
