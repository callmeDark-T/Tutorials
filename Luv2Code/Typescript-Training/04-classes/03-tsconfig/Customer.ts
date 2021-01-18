class Customer{

  //Properties
  private _firstName: string;
  private _lastName: string;

  //constructor
  constructor(theFirst: string, theLast: string){
    this._firstName = theFirst;
    this._lastName = theLast;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }


  
}

// let's create an instance
let myCustomer = new Customer("Tamajong Asamba", "Aiden");

//myCustomer.firstName = "Tamajong Asamba";
//myCustomer.lastName = "Aiden";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);