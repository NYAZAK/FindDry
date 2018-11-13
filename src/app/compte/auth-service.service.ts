import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public angularfa: AngularFireAuth) { }

  register(email: string, password: string){
    return this.angularfa.auth.createUserWithEmailAndPassword(email, password);
  }
}
