import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {
  myprofil: Profil[];
  profil$;
  profilSubscription: Subscription;
  userId;
  staticAlertClosed = false;
  constructor(private ProfilS: ProfilService, 
              private router: Router,
              private angularfa: AngularFireAuth, ) { 
                this.angularfa.authState.subscribe(user => {
                  if (user) {
                    this.userId = user.uid;
                    console.log('current token', this.userId);
                  }
                  }) }
  ngOnInit(): void {
    this.profilSubscription = this.ProfilS.profilSubject
    .subscribe((profil: Profil[]) => {
      this.myprofil = profil;
    });
    this.profil$ =  this.ProfilS.getProfil(this.userId);
    this.angularfa.authState.subscribe(user =>
      {if(user) {
        setTimeout(() => this.staticAlertClosed = true, 5000); 
      }})
  }
  getprofil() {
    return this.ProfilS.getProfil(this.userId);
  }
  onDeleteMyProfil(profil: Profil) {
    this.ProfilS.removeUser(this.userId);
  }
  // onChangeProfil() {
  //   this.router.navigate(['/ChangeMesInfos']);
  // }
  // mesPassages(){
  //   this.router.navigate(['/Reservations']);
  // }
  // nouveauPassage(){
  //   this.router.navigate(['/ReservationsForm']);
  // }

}
