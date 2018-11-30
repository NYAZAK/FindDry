import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  title = 'Créez votre compte chez FindClean';
  formCreate: FormGroup;
  constructor(private formBuilder: FormBuilder, private AuthSS: AuthServiceService, private route: Router) { }

  ngOnInit() {
    this.initFormCreateAccount();
  }

  initFormCreateAccount(){
    this.formCreate = this.formBuilder.group({
      mdp: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  CreateCount() {
    const email = this.formCreate.get('email').value;
    const mdp = this.formCreate.get('mdp').value;
      this.AuthSS.register(email,mdp)
      .then(() => {
        // TODO rest form
        this.route.navigate(['/ProfilUser']);
      }).catch(error => console.error(error.message));
    } 

}

