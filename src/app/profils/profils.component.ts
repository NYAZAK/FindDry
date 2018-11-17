import { Component } from '@angular/core';
import { ProfilserviceService } from '../profils/profilservice.service';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent {
  userId;
  constructor(public profilService: ProfilserviceService, public angularfa: AngularFireAuth) { 
    this.angularfa.authState.subscribe(user => {
      if(user){
        this.userId = user.uid;
      }
    })
  }

  onSendMyInfo(info) {
    console.log('les infos retrieved', info);
     let addedInfo =   this.profilService.saveInfo({
          name: info.value.name,
          firstname: info.value.firstname,
          dateborne: info.value.dateborne,
          tel: info.value.tel,
          address: info.value.address,
          cp: info.value.cp,
          ville: info.value.city,
        });
        console.log("info envoye", addedInfo);
      }

  onMajInfo(info){
    this.profilService.majMyInfo({
      name: info.value.name,
      firstname: info.value.firstname,
      dateborne: info.value.dateborne,
      tel: info.value.tel,
      address: info.value.address,
      cp: info.value.cp,
      ville: info.value.city,
      key: info.value.key
     
    });
    console.log(info.value.key, 'donnée depuis le parent');
  }

}
