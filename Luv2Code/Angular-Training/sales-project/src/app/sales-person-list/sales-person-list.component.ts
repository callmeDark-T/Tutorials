import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Tamajong Asamba", "Aiden", "a.t.asamba@outlook.com", 50000),
    new SalesPerson("Binue Asamba", "Valerie", "b.v.asamba@outlook.com", 60000),
    new SalesPerson("Sylvie Asamba", "Takwi", "s.t.asamba@outlook.com", 70000),
    new SalesPerson("Evelyn Ezinne", "Aiden", "e.e.aiden@outlook.com", 80000),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
