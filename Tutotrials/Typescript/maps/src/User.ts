import faker from 'faker';
import { Mappable } from './CustomMap';

// export decorator is to make this class accessable out there
export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red'; 

  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      //parseFloat function is to convert string to number value
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }

  }

  markerContent(): string{
    return ` 
    <div>
    <h1>User Name: ${this.name} </h1>
    </div>
    `;
  };
}