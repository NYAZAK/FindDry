import { Component } from '@angular/core';
import { ProfilserviceService } from '../profils/profilservice.service';
@Component({
  selector: 'app-profils',
  templateUrl: './profils.component.html',
  styleUrls: ['./profils.component.css']
})
export class ProfilsComponent {

  constructor(public profilService: ProfilserviceService) { }

  onSendMyInfo(info) {
   this.profilService.sendInfo({
    name: info.value.name,
    firstname: info.value.firstname,
    dateborne: info.value.dateborne,
    tel: info.value.tel,
    address: info.value.address,
    cp: info.value.cp,
    ville: info.value.city,
    mail: info.value.mail
  });
    console.log("info envoye");
  }

}
