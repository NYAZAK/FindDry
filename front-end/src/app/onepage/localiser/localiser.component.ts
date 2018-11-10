import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localiser',
  templateUrl: './localiser.component.html',
  styleUrls: ['./localiser.component.css']
})
export class LocaliserComponent  implements OnInit {
   lat:  number ; // = 48.890733060934934;
   lng:  number ; // = 2.247059107055634;
  title: string = 'Localisez votre Laverie';
  google: any;
  constructor() { }

  ngOnInit() {
    this.getUserLocations();
  }

  private getUserLocations() {
    // locate the user

    if ( navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
  onCoordMarkerDropped(event: any) {
    console.log(event);
  }

  mapReady($event: any) {
    // here $event will be of type google.maps.Map
    // and you can put your logic here to get lat lng for marker. I have just put a sample code. You can refactor it the way you want.
    this.getLatLong('AIzaSyC3GSGY9FqvOLror7N6dkOvHOpKqazaFz4', $event, null);
  }

  getLatLong(placeid: string, map: any, fn) {
      let placeService = new this.google.maps.places.PlacesService(map);
      placeService.getDetails({
        placeId: placeid
        }, function (result, status) {
          this.lat = result.geometry.location.lat();
           console.log(result.geometry.location.lat());

          this.lng = result.geometry.location.lng();
          console.log(result.geometry.location.lng());
        });
    }

}
