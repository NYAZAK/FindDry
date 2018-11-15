import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  constructor(public fb: FormBuilder, private ContactS: ContactService) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  postMessage(message) {
    console.log('message posté', message);
    if(this.formContact.valid) {
      // todo add to firebase
      message = {
        nom: this.formContact.value.name,
        prenom: this.formContact.value.lastname,
        email: this.formContact.value.email,
        message: this.formContact.value.message
      }
      this.ContactS.sendMessage(message);
      console.log('message apres', message);
    }
  }

}
