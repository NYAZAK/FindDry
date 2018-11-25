import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent implements OnInit {
  reseautage = '../../assets/img-content/William_and_Mary_at_laundromat-min.jpg';
  lavomatique = '../../assets/img-content/Safe_Boreas_Prosafe_min.jpg';
  experience = '../../assets/img-content/jtlaundry0gif.gif';

  taille = '400px';
  constructor() { }

  ngOnInit() {
  }

}
