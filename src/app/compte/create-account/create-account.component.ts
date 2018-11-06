import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  title = 'Créez votre compte GRATUIT chez FindDry';
  formCreate: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCreate = this.formBuilder.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      mdp: ['', Validators.required],
      mdp2: ['', Validators.required],
      email : ['', Validators.required],
      email2 : ['', Validators.required]
    });
  }

  CreateCount() {

    if (this.formCreate.valid) {
      console.log('compte creer');
    } else {
      console.log('form pas valid');
    }
  }

}
