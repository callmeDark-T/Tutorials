const today = new Date();
today.getMonth();

const person = {
  age: 20
};

class Color {}
const red = new Color();

//Type variable annotation
const apple: number= 5;
const speed: string = 'fast';
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


//built in objets
let now: Date = new Date();

// Array
let colors: string[] =  ['red', 'green', 'blue'];
let myNumbers: number[] = [1 ,2, 3];
let truths: boolean[] = [true , false, true];

//classes
class Car{

}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {

  console.log(i);
};


// 2) When we declear a variable on one line
// and initialzate it later
let words = ['red', 'green', 'blue'];
let foundWord: Boolean;

for (let index = 0; index < words.length; index++) {

  if (words[index]== 'green') {
    foundWord= true;
  }
  
}