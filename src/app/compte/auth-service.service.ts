import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable }  from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user$ : Observable<firebase.User>;
  constructor(public angularfa: AngularFireAuth) { 
    this.user$ = angularfa.authState;
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
