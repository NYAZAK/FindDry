import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  title = 'Trouvez votre propres Laverie Ou recourez à nos services de pressing';
  imgMobile = '../assets/img-content/Mobile.png';
  imgLocalisation = '../assets/img-content/localisation-nglesson.png';
  telecharger = 'Téléchargez FindDry';
}
