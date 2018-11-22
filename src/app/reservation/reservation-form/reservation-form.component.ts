import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  monRamassage: FormGroup;
  today;
  todate = this.calendar.getToday();
  dateIsChossed :boolean = false;
  formule1 : boolean = false;
  formule2 : boolean = false;
  formule3 : boolean = false;
  formule4 : boolean = false;
  formuleForm;
  time = {hour: (new Date()).getHours() + 1, minute:(new Date()).getMinutes()};
  userid;
  myFormule: Reservation;
  // heure;
  // model;
  constructor(private fb: FormBuilder,
               private calendar: NgbCalendar,
              private afdb: AngularFireDatabase, 
              private angularfa: AngularFireAuth,
              private reserversationS: ReservationService  ) {
    this.today = this.calendar.getToday();
    this.angularfa.authState.subscribe(user => { 
      if(user){
        this.userid = user.uid;
      }});
  }
  ngOnInit() {
   
    this.monRamassage = this.fb.group({ 
      lavage1: false,
      blanchissage1: false,
      retouche1: false,
      repassage1: false, 
    date: {'day': 0, 'month': 0, 'year': 0},
    heure: {'hour': 0, 'minute': 0 }
    });
    this.monRamassage.get('date').setValue(this.todate);
    this.monRamassage.get('heure').setValue(this.time);
    if(this.today = this.calendar.getToday()){ 
      this.dateIsChossed = true;
    }
    this.chooseFormule();
    // controle de coherence 

    if(this.monRamassage.value.lavage1){
      this.monRamassage.value.lavage = "lavage";
      console.log(this.monRamassage.value.lavage);
    }
    if(this.monRamassage.value.blanchissage1){
      this.monRamassage.value.blanchissage = "blanchissage";
      console.log(this.monRamassage.value.blanchissage);
    }  
    if(this.monRamassage.value.retouche1) {
      this.monRamassage.value.retouche = "retouche";
      console.log(this.monRamassage.value.retouche);
    }
    if(this.monRamassage.value.repassage1) {
      this.monRamassage.value.repassage = "repassage";
      console.log(this.monRamassage.value.repassage);
    }
  }
  // get today() {
  //   return new Date();
  // }
  
  chooseFormule() {
    if(this.monRamassage.value.lavage1){
      this.monRamassage.value.lavage = "lavage";
      console.log(this.monRamassage.value.lavage);
    }
    if(this.monRamassage.value.blanchissage1){
      this.monRamassage.value.blanchissage = "blanchissage";
      console.log(this.monRamassage.value.blanchissage);
    }  
    if(this.monRamassage.value.retouche1) {
      this.monRamassage.value.retouche = "retouche";
      console.log(this.monRamassage.value.retouche);
    }
    if(this.monRamassage.value.repassage1) {
      this.monRamassage.value.repassage = "repassage";
      console.log(this.monRamassage.value.repassage);
    }
  }
  myNewFormule() {
    const date = this.model.day + this.model.month + this.model.year;
    // const time = this.time.hour + this.time.minute;
    // const formule = this.ReservationForm.value;
    const data = new Reservation(date); 
    console.log('ici le formulaire a été validé');
      this.reserversationS.saveFormule(data);
    }
  // isToday(){
  //   this.model = this.today;
  // }
  // onHour() {
  //   this.time = {hour: (new Date()).getHours() + 2, minute:(new Date()).getMinutes()};
  // }
}
