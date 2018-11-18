import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {
  userId;
  constructor(private angularfa: AngularFireAuth,
               private route: Router) {
                this.angularfa.authState.subscribe(user =>
                  {if(user) {
                    this.userId = user.uid
                    console.log('depuis guard security', this.userId);
                  }})
                }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.angularfa.authState.subscribe(
            (user) => {
              if(user) {
                resolve(true);
              } else {
                this.route.navigate(['/Connexion']);
                resolve(false);
              }
            }
          );
    })
  }
}
