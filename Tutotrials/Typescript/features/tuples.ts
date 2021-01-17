// this is an object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];

// Tuples representation of drink object
//const pepsi: [string, boolean, number] = ['brown', true, 40]; OR
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//When to use tuples : when using a csv file

//Objects are always better thasn tuples
