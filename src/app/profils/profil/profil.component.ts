import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from 'src/app/compte/auth-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilserviceService } from '../profilservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  
  @Output() 
  mesInfo = new EventEmitter();
  
  profil = 'Profil de ';
  FormInfoPersonal: FormGroup;
  message$;
  editMode = false;
  
  constructor(public AuthSS: AuthServiceService, 
              private afdb: AngularFireDatabase,
              private profilS: ProfilserviceService,
              private fbuilder: FormBuilder) { }

  ngOnInit() {
    this.FormInfoPersonal = this.fbuilder.group({
      name: ['',Validators.required],
      firstname:['',Validators.required],
      dateborne:['',Validators.required],
      tel:['',[Validators.required, Validators.pattern(/['0-9']{10,}/)]],
      address:['',Validators.required],
      cp:['',[Validators.required, Validators.pattern(/['0-9']{5,}/)]],      
      city:['',Validators.required],      
      mail:['',Validators.required]
    })
  }



  getMyInfo() {
    this.message$ = this.profilS.getPersonalInfo();
  }

  sendmyInfo() {
    this.mesInfo.emit(this.FormInfoPersonal);
    this.editMode = false;
    console.log('mes info sont envoyé en base de donnée', this.FormInfoPersonal);

  }

  editInfo() {
    this.editMode = true;
  }

  

}
