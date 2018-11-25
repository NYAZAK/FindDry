import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeService } from './stripe.service';
import { StripeComponent } from './stripe/stripe.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StripeComponent],
  providers: [
    StripeService
  ]
})
export class StripeModule { }
