// const carMakers: string[] = ['ford', 'toyota', 'chevy']; OR
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// Multi dimentional Array
// const carsByMake: string[][] = [];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car1 = carMakers[0];

//to remove the last element in the array
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100); // wrong type adding

// Help with 'map'
carMakers.map(
  (car: string): string => {

    return car.toUpperCase();
  }

);


// Flexible types
// This array can contain either date or string values
const importantDates: (Date | string )[] = [new Date(), '2020-12-15'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
