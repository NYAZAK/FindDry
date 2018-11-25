import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  Reservation$;
  userid;
  ReservationSub: Subscription;
  constructor(private reservationS: ReservationService,
    private angularfa: AngularFireAuth) {
    this.angularfa.authState.subscribe(user => {
      if (user) {
        this.userid = user.uid;
      }
    });
    this.Reservation$ = this.reservationS.getMyFormule(this.userid);
  }

  ngOnInit() {
    this.Reservation$ = this.reservationS.getMyFormule(this.userid);
  }

  gotMyTickets() {
    return this.reservationS.getMyFormule(this.userid);
  }

}
