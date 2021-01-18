var Customer = /** @class */ (function () {
    //constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// let's create an instance
var myCustomer = new Customer("Tamajong Asamba", "Aiden");
//myCustomer.firstName = "Tamajong Asamba";
//myCustomer.lastName = "Aiden";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
