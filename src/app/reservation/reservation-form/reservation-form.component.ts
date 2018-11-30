import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation.model';
import { Router } from '@angular/router';
import { StripeService } from '../../payment/stripe.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  monRamassage: FormGroup;
  today;
  todate = this.calendar.getToday();
  dateIsChossed: boolean = false;
  formule1: boolean = false;
  formule2: boolean = false;
  formule3: boolean = false;
  formule4: boolean = false;
  time = { hour: (new Date()).getHours() + 1, minute: (new Date()).getMinutes() };
  userid;
  myFormule: Reservation;
  displayMonths = 1;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
  handler: any;
  amount: number = 500;
  resaprogramed: boolean = false;
  constructor(private fb: FormBuilder, private calendar: NgbCalendar, private route: Router, private angularfa: AngularFireAuth, private reserversationS: ReservationService, private payS: StripeService) {
    this.today = this.calendar.getToday();
    this.angularfa.authState.subscribe(user => {
      if (user) {
        this.userid = user.uid;
      }
    });
  }
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      local: 'auto',
      token: token => {
        this.payS.processPayment(token, this.amount)
      }
    });
    this.monRamassage = this.fb.group({
      lavage1: false,
      blanchissage1: false,
      retouche1: false,
      repassage1: false,
      date: { 'day': 0, 'month': 0, 'year': 0 },
      heure: { 'hour': 0, 'minute': 0 }
    });
    this.monRamassage.get('date').setValue(this.todate);
    this.monRamassage.get('heure').setValue(this.time);
    if (this.today = this.calendar.getToday()) {
      this.dateIsChossed = true;
    }
    this.chooseFormule();
    // controle de coherence 

    if (this.monRamassage.value.lavage1) {
      this.monRamassage.value.lavage = "lavage";
      console.log(this.monRamassage.value.lavage);
    }
    if (this.monRamassage.value.blanchissage1) {
      this.monRamassage.value.blanchissage = "blanchissage";
      console.log(this.monRamassage.value.blanchissage);
    }
    if (this.monRamassage.value.retouche1) {
      this.monRamassage.value.retouche = "retouche";
      console.log(this.monRamassage.value.retouche);
    }
    if (this.monRamassage.value.repassage1) {
      this.monRamassage.value.repassage = "repassage";
      console.log(this.monRamassage.value.repassage);
    }
  }
  chooseFormule() {
    if (this.monRamassage.value.lavage1) {
      this.monRamassage.value.lavage = "lavage";
      console.log(this.monRamassage.value.lavage);
    }
    if (this.monRamassage.value.blanchissage1) {
      this.monRamassage.value.blanchissage = "blanchissage";
      console.log(this.monRamassage.value.blanchissage);
    }
    if (this.monRamassage.value.retouche1) {
      this.monRamassage.value.retouche = "retouche";
      console.log(this.monRamassage.value.retouche);
    }
    if (this.monRamassage.value.repassage1) {
      this.monRamassage.value.repassage = "repassage";
      console.log(this.monRamassage.value.repassage);
    }
  }

  myNewFormule() {
    const date = this.monRamassage.value.date;
    const heure = this.monRamassage.value.heure;
    console.log(date, heure);
    const formule = {
      lavage: this.monRamassage.value.lavage1,
      blanchissage: this.monRamassage.value.blanchissage1,
      retouche: this.monRamassage.value.retouche1,
      repassage: this.monRamassage.value.repassage1,
    };
    const userid = this.userid;
    const data = new Reservation(date, heure, formule);
    this.reserversationS.createReseration(data, userid);
    // this.route.navigate(['/Payment']);
  }
 
  handlePayment() {
    this.handler.open({
      name: 'FindClean',
      description: 'Payement d\'une course',
      amount: this.amount

    });
    this.resaprogramed = true;
    setTimeout( () => this.resaprogramed = false, 40000);
   
  }

  @HostListener('window:popstate')
    onPopstate(){
      this.handler.close();
      this.resaprogramed = true;
      setTimeout( () => this.resaprogramed = false, 40000);
    }
}
