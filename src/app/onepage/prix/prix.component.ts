import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent  implements OnInit {


  prestation: string[];
  constructor(private http: HttpClient) { 
  }
  
  ngOnInit(){
    this.http.get('../../assets/prestations.json').subscribe( prez => {
      this.prestation = prez as string[];
      console.log(this.prestation[1]);
    }), 
    (err: HttpErrorResponse) => {
      console.log(err.message);
    }
}


}
