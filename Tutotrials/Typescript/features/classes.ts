class Vehicle {
  color: string = 'red';

  constructor(color: string){
    this.color = color;
  }

  drive(): void{
    console.log('chugga chugga');
  }

  honk(): void{
    console.log('beep beep');
  }
}
const vehicle = new Vehicle('red');
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

class CarA extends Vehicle {

  constructor(public wheels: number, public color: string){
    super(color);
  }

 public drive(): void{
  console.log('Vroom Vroom');
  }

  private honkA(): void{
    console.log('Car beep');
  }

  startDrivingHonk(): void{
    this.honkA();
  }
}

const carA = new CarA(4,'BLUE');
carA.drive();
carA.startDrivingHonk();
console.log(carA.color);