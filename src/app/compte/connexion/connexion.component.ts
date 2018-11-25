import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formConnect: FormGroup;
  title = "Connectez vous";
  isConnect: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
     public AuthSS: AuthServiceService, private route: Router,) { }

  ngOnInit() {
    this.initFormConnexion();
  }

    initFormConnexion(){
      this.formConnect = this.formBuilder.group({
        email: ['', Validators.required],
        mdp: ['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      })
    }

  connexion(){
    const email = this.formConnect.get('email').value;
    const mdp = this.formConnect.get('mdp').value;
    this.AuthSS.login(email, mdp)
    .then(() => {
      console.log('votre compte');
      this.route.navigate(['/ProfilUser']);
    })
    .catch(err =>  { 
      console.error('erreur : (', err.message);
    });
   
  }
}
