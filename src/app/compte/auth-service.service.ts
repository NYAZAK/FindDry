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


  /* https://stackoverflow.com/questions/42125238/cant-get-firebase-userid

 
function handleRegister() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ref = firebase.database().ref();
     console.log(email);
     console.log(fname);

        if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

     
       firebase.auth().createUserWithEmailAndPassword(email, password) .then(function(user) {
        var root = firebase.database().ref();
        var uid = user.uid;
        var postData = {
        Firstname: fname,
        Lastname: lname,
        email: email
      };
          root.child("Users").child(uid).set(postData);
      })
        // Get a key for a new Post.
      var newPostKey = firebase.database().ref().child('Users').push().uid;

      var updates = {};
      updates['/Users/' + newPostKey] = postData;
      // updates['/user-posts/' + '/' + newPostKey] = postData;
      return firebase.database().ref().update(updates);
      })
    }
  */
}
