import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  formContact: FormGroup;
  misTouched= 'Vous n\'avez pas rempli le champs';
  msgDone: boolean = false;
  constructor(private fb: FormBuilder, public ContactS: ContactService) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['', [Validators.required, 
                  Validators.email]],
      message: ['', Validators.required],
    });
  }

  postMessage() {
      if(this.formContact.valid){
        this.ContactS.sendMessage({
        nom: this.formContact.value.name,
        prenom: this.formContact.value.lastname,
        mail: this.formContact.value.mail,
        message: this.formContact.value.message
      });
    }
    this.msgDone = true;
    setTimeout(() => this.msgDone = false, 10000); 
    this.formContact.reset();
  }

}
