import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/compte/auth-service.service';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit, OnDestroy {

  myprofil: Profil[];
  profil$;
  profilSubscription: Subscription;
  constructor(private ProfilS: ProfilService, 
              private router: Router,
              public AuthSS: AuthServiceService,
              public afdb: AngularFireDatabase) { }

  ngOnInit() {
    this.profilSubscription = this.ProfilS.profilSubject
    .subscribe((profil: Profil[]) => {
      this.myprofil = profil;
    });

    this.profil$ =  this.afdb.list(`UserProfil`).valueChanges();
    this.ProfilS.getProfil();
  }

  getprofil() {
    return this.ProfilS.getProfil();
  }
  

  onDeleteMyProfil(profil: Profil) {
    this.ProfilS.removeUser();
  }

  onChangeProfil() {
    this.router.navigate(['/ChangeMesInfos']);
  }

  ngOnDestroy() {
    this.profilSubscription.unsubscribe();

  }

}
