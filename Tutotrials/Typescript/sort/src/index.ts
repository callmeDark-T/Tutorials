import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';


const numbersCollectionter = new NumbersCollection([65, -99, 45, 21, -50, 10, 3, -5, 0, 6, -9, 2, -4]);
const sorter = new Sorter(numbersCollectionter);
sorter.sort();
console.log(numbersCollectionter.data);


const charactersCollection = new CharactersCollection ('yqWkHs');
const sortCharacters = new Sorter(charactersCollection);
sortCharacters.sort();
console.log(charactersCollection.data);