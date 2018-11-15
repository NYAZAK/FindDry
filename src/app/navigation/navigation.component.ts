import { Component } from '@angular/core';
import { AuthServiceService } from '../compte/auth-service.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  disappear: boolean = true;
  constructor(public AuthSS: AuthServiceService) { }

  isDisappear() {
    this.disappear = !this.disappear;
  }

  deconnxion(){
    this.AuthSS.singOut();
  }
}
