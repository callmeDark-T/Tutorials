import {User} from './User';
import {Company} from './Company';


export interface Mappable{
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;

  color: string ;
}


export class CustomMap{
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addUserMarker(user: User): void{

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }

    });

  }

  addCompanyMarker(company: Company): void{

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }

    });

  }


  //Solution One for Dynamic or Generic method
  addMarker(mappable: User | Company): void{

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }

    });

  }


    //Solution TWO BEST for Dynamic or Generic method using Interface
    addMarkerInteface(mappable: Mappable): void{

      const marker = new google.maps.Marker({
        map: this.googleMap,
        position: {
          lat: mappable.location.lat,
          lng: mappable.location.lng
        }
  
      });
      //Adding click lister to the marker 
      marker.addListener('click' , () => {
         const inforWindow = new google.maps.InfoWindow({
           content: mappable.markerContent()
         });
         // open an info window when clicked
         inforWindow.open(this.googleMap, marker); 
      });
    }



}