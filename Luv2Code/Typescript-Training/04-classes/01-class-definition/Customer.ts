class Customer{

  //Properties
  firstName: string;
  lastName: string;

  //constructor
  constructor(theFirst: string, theLast: string){
    this.firstName = theFirst;
    this.lastName = theLast;
  }

}

// let's create an instance
let myCustomer = new Customer("Tamajong Asamba", "Aiden");

//myCustomer.firstName = "Tamajong Asamba";
//myCustomer.lastName = "Aiden";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);