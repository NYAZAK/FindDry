import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Reservation } from './reservation.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  userId;
  ResaSubject = new Subject<Reservation[]>();
  myReservation: Reservation; 
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
                firebase.database().ref(`/Formules/${id}`).set(this.myReservation);
              }
              createReseration(newReservation: Reservation, id) {
                this.afdb.list(`/Formules/${id}`).push(newReservation);
              }

              getMyFormule(id) {
                return this.afdb.list(`/Formules/${id}`).valueChanges();
              }

              removeMylastFormule(id) {
                firebase.database().ref(`Formules/${id}`).remove();
              }

}
