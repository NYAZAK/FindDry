import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProfilserviceService {

  constructor(public afdb: AngularFireDatabase) { }

  getPersonalInfo(){
    return this.afdb.list('InfoPersonal').valueChanges();
    }

    sendInfo(info){
      this.afdb.list('InfoPersonal').push(info);
    }
}
