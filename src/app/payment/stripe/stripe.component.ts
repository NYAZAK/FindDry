import { Component, OnInit, HostListener } from '@angular/core';
import { StripeService } from '../stripe.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  handler: any;
  amount: number = 500;

  constructor(private payS: StripeService) { }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      local: 'auto',
      token: token => {
        this.payS.processPayment(token, this.amount)
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: 'FireStarter',
      description: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
    onPopstate(){
      this.handler.close()
    }
}
