interface Report {
 // name: string;
 // year: Date;
//  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
   
    return `
    Name: ${this.name}
    Year: ${this.year}
    Broken: ${this.broken} `;
    }
  };

  const drink1 = {
    color: 'brown',
    carbonated: true,
    sugar: 40,

    summary(): string {
   
      return `
      My drink has ${this.sugar} grams of sugar.
      Carbonated: ${this.carbonated}
      Color: ${this.color} `;
      }

  };

//const printVehicle = (verhicle: {name: string; year: number; broken: boolean}): void => {} OR
const printReport = (item: Report): void => {
  console.log(item.summary());
};

printReport(oldCivic);

printReport(drink1);