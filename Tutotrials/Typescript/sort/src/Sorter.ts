
interface Sortable{
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter{

  constructor(public collection:Sortable){}

  //Sorting Algorithm  (Bobble sort algorithm)
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j +1 )) {
          // swapping the values
          this.collection.swap(j, j +1 )
        }
        
      }
      
    }

  }
}
