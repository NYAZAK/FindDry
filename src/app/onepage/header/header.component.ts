import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  title = 'Gagnez du temps en utilisant FindDry, commander un passage ; On vient, on prend votre linge, on le lave, le seche, opere des retouches, et on vous le rends 5 heures après*';

  imgMobile = '../assets/img-content/Mobile.png';
  imgLocalisation = '../assets/img-content/localisation-nglesson.png';
  imgLocalisationmin = '../assets/img-content/localisation-nglesson.png';
  telecharger = 'Localiser votre laverie';
}
