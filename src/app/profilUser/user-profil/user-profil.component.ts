import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/compte/auth-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit, OnDestroy {

  myprofil: Profil[];
  profil$;
  profilSubscription: Subscription;
  userId;
  constructor(private ProfilS: ProfilService, 
              private router: Router,
              public AuthSS: AuthServiceService,
              public afdb: AngularFireDatabase,
              public angularfa: AngularFireAuth, ) { 
                this.angularfa.authState.subscribe(user => {
                  if (user) {
                    this.userId = user.uid;
                    console.log('current token', this.userId);
                  }
                  }) }

  ngOnInit() {
    this.profilSubscription = this.ProfilS.profilSubject
    .subscribe((profil: Profil[]) => {
      this.myprofil = profil;
    });

    this.profil$ =  this.ProfilS.getProfil(this.userId);
    
  }

  getprofil() {
    return this.ProfilS.getProfil(this.userId);
  }
  

  onDeleteMyProfil(profil: Profil) {
    this.ProfilS.removeUser(this.userId);
  }

  onChangeProfil() {
    this.router.navigate(['/ChangeMesInfos']);
  }

  ngOnDestroy() {
    this.profilSubscription.unsubscribe();

  }

}
