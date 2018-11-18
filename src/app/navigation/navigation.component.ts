import { Component } from '@angular/core';
import { AuthServiceService } from '../compte/auth-service.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  disappear: boolean = true;
  userId;
  constructor(public AuthSS: AuthServiceService,
              private router: Router,
              public angularfa: AngularFireAuth,) {
                this.angularfa.authState.subscribe(user =>
                  {if(user) {
                    this.userId = user.uid;
                    console.log(this.userId);
                    
                  }})
               }

  isDisappear() {
    this.disappear = !this.disappear;
  }

  deconnxion(){
    this.AuthSS.singOut();
  }

  // seeMyProfil(info){
  //   info.userId = this.userId
  //   this.router.navigate(['/ProfilUser', this.userid, info.key]);
  // }
}
