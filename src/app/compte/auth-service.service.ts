import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject  } from "angularfire2/database";
import { Observable }  from 'rxjs';
import * as firebase from 'firebase/app';

export class User {
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user$ : Observable<firebase.User> = null;

  userId: string;
  constructor(private angularfa: AngularFireAuth, private db : AngularFireDatabase) { 
    this.user$ = angularfa.authState;
    this.angularfa.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }
  
  register(email: string, password: string){
    return this.angularfa.auth.createUserWithEmailAndPassword(email, password);
  }
  login(email: string, password: string) {
    return this.angularfa.auth.signInWithEmailAndPassword(email, password);
  }

  singOut(){
    this.angularfa.auth.signOut();
  }

  sendEmailVerification() {
    const user = firebase.auth().currentUser;
    if(user) {
      user.sendEmailVerification()
      .then( () => {
        console.log('email envoyé');
      }). catch(error => {
        console.error('error sending email', error);
      })
    }
  }

}
