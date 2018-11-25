import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-profiluser',
  templateUrl: './profiluser.component.html',
  styleUrls: ['./profiluser.component.css']
})
export class ProfiluserComponent implements OnInit {

userid;
dataExist: boolean = true;

  constructor(private afdb: AngularFireDatabase, private angularfa: AngularFireAuth) {
    this.angularfa.authState.subscribe(user => {
      if(user) {
        this.userid = user.uid;
      }
    });
    
   }

  ngOnInit() {
    firebase.database().ref(`UserProfil/${this.userid}`).once("value", snapshot => {
      if (snapshot.exists()){
      console.log("exists!");
        this.dataExist = true;
       }
       else {
        this.dataExist = false;
       }
   });

   
     
  }


}
