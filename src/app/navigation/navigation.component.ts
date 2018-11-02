import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  disappear: boolean = true;
  constructor() { }

  isDisappear() {
    this.disappear = !this.disappear;
  }
}
