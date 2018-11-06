import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  postMessage() {
    console.log('message posté');
  }

}
