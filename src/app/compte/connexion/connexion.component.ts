import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formConnect: FormGroup;
  title = "Connectez vous";
  isConnect: boolean = false;
  
  constructor(private formBuilder: FormBuilder, public AuthSS: AuthServiceService ) { }

  ngOnInit() {
    this.formConnect = this.formBuilder.group({
      email: ['', Validators.required],
      mdp: ['', Validators.required],
      pseudo: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  connexion(){
    this.AuthSS.login(this.formConnect.value.email, this.formConnect.value.mdp)
    .then(value => {
      console.log('votre compte');
    })
    .catch(err =>  { 
      console.error('erreur : (', err.message);
    });
  }
}
