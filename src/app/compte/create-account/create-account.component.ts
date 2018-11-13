import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  title = 'Créez votre compte chez FindDry';
  formCreate: FormGroup;
  constructor(private formBuilder: FormBuilder, private AuthSS: AuthServiceService) { }

  ngOnInit() {
    this.formCreate = this.formBuilder.group({
      // nom: ['', Validators.required],
      // prenom: ['', Validators.required],
      mdp: ['', Validators.required],
      // mdp2: ['', Validators.required],
      email: ['', Validators.required],
      // email2: ['', Validators.required]
    });
  }

  CreateCount() {

      this.AuthSS.register(this.formCreate.value.email, this.formCreate.value.mdp)
      .then(createUser => {
        // TODO rest form
      }).catch(error => console.error(error.message));
  
    } 

}
