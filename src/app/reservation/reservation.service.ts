import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  userId;
  myFormule;
  formule$;
  constructor(private angularfa: AngularFireAuth,
              private afdb: AngularFireDatabase) { 
                this.angularfa.authState.subscribe(user => {
                  if(user) {
                    this.userId = user.uid;
                    console.log(this.userId, 'depuis la reservation service');
                  }
                })
                this.getMyFormule(this.userId);
              }


              saveFormule(id) {
                firebase.database().ref(`Formules/${id}`).set(this.myFormule);
              }

              getMyFormule(id) {
                return this.formule$ = this.afdb.list(`Formules/${id}`, ref => ref.limitToLast(10)).valueChanges();
              }

              removeMylastFormule(id) {
                firebase.database().ref(`Formules/${id}`).remove();
              }

}
