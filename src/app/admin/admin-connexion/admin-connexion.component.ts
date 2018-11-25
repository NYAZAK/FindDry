import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-connexion',
  templateUrl: './admin-connexion.component.html',
  styleUrls: ['./admin-connexion.component.css']
})
export class AdminConnexionComponent implements OnInit {
isAdmin: boolean = false;
title= 'se connecter en tant qu\'administrateur'
adminConnect: FormGroup;
useridAd;
  constructor(private formb: FormBuilder, private authAd: AdminService, 
    private angularfa: AngularFireAuth, private route: Router) {
    this.angularfa.authState.subscribe(user =>{
      if(user) {
        console.log(user);
        this.useridAd = user.uid;
      }
    })
   }

  ngOnInit() {
    this.adminConnect = this.formb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9 ]{6,}/)]],
    });
    this.authAd.user$.subscribe(user => {
      console.log(user, 'je suis un admin');
      if(user && user.email === 'assorelik@gmail.com' && this.useridAd === "8tbwjECfYsTsGb9RsCsKlgDN1up2"){
        console.log(user, 'je suis admin');
        this.adconnexion();
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }
  adconnexion(){
      const email = this.adminConnect.get('email').value;
      const mdp = this.adminConnect.get('mdp').value;
      this.useridAd; 
      console.log(this.useridAd, 'connexion useruid');
       if(email == 'assorelik@gmail.com' ) {
        this.authAd.adLogin(email, mdp)
        .then(() => {
          this.isAdmin = true;
        console.log('votre compte');
        this.route.navigate(['/Adminview']);
      })
      .catch(err =>  { 
        console.error('erreur : (', err.message);
      });
   
    }
  }

}
