import { Component, OnInit } from '@angular/core';
import { ProfilserviceService } from '../profilservice.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-back-end-profil',
  templateUrl: './back-end-profil.component.html',
  styleUrls: ['./back-end-profil.component.css']
})
export class BackEndProfilComponent implements OnInit {
  myprofil$;
  // editMode = false;
  // action;
  FormInfoPersonal: FormGroup;
  constructor(private profilS: ProfilserviceService) { }

  ngOnInit() {
    this.myprofil$ = this.profilS.getPersonalInfo();
  }
  
  editMyInfo(info){
    // this.editMode = true;
    this.profilS.editInfo(info);
  }

  deleteEdit() {
    // this.editMode = false;
    // this.action = 'ajouter';
    this.FormInfoPersonal.reset();
  }
  
}
