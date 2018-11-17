import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/compte/auth-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilserviceService } from '../profilservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Observable, Subject} from 'rxjs';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  @Output() 
  mesInfo = new EventEmitter();

  @Output()
  majInfo = new EventEmitter();


  profil = 'Profil de ';
  FormInfoPersonal: FormGroup;
  message$;
  // editMode = false;
  myprofil$;
  infos$
  // action;
  user$ : Observable<firebase.User> = null;
  userId: string;
  constructor(public AuthSS: AuthServiceService, 
              public afdb: AngularFireDatabase,
              public profilS: ProfilserviceService,
              public fbuilder: FormBuilder,
              public angularfa: AngularFireAuth) {
                this.user$ = angularfa.authState;
    this.angularfa.authState.subscribe(user =>
       {if(user) {
         this.userId = user.uid
         console.log()
       }})
               }

  ngOnInit() {
    this.FormInfoPersonal = this.fbuilder.group({
      name: ['',Validators.required],
      firstname:['',Validators.required],
      dateborne:['',Validators.required],
      tel:['',[Validators.required, Validators.pattern(/['0-9']{10,}/)]],
      address:['',Validators.required],
      cp:['',[Validators.required, Validators.pattern(/['0-9']{5,}/)]],      
      city:['',Validators.required],      
      // mail:['',Validators.required],
    });
     
    this.profilS.subject.subscribe(data => { 
      console.log('data', data);
      // this.editMode = true;
      // this.action = 'modifier';
      // this.infos$ = data;
      // this.FormInfoPersonal.get('name').patchValue(this.infos$.name);
      // this.FormInfoPersonal.get('firstname').patchValue(this.infos$.firstname);
      // this.FormInfoPersonal.get('dateborne').patchValue(this.infos$.dateborne);
      // this.FormInfoPersonal.get('tel').patchValue(this.infos$.tel);
      // this.FormInfoPersonal.get('address').patchValue(this.infos$.address);
      // this.FormInfoPersonal.get('cp').patchValue(this.infos$.cp);
      // this.FormInfoPersonal.get('city').patchValue(this.infos$.city);
      // // this.FormInfoPersonal.get('mail').patchValue(this.infos$.mail);
      // this.FormInfoPersonal.get('key').patchValue(this.infos$.key);
    })
  }

  getMyInfo() {
    console.log( this.userId, 'ici depuis getPersonalInfo');
    return this.afdb.list(`InfoPersonal/${this.userId}`).snapshotChanges().pipe(map(infos => 
     infos.map(info => 
     ( { key: info.key, ...info.payload.val() }), 
     this.afdb.list(`InfoPersonal/${this.userId}`).valueChanges())));  
}
  sendmyInfo() {
    if(this.FormInfoPersonal.valid){
      this.mesInfo.emit(this.FormInfoPersonal);
      // this.editMode = false;
    } else {
      console.log('forumalaire invalide');
    }
  }

 
}
