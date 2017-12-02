import { MockDatabase } from '../../mockDb/mockdatabase';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {
  mockdb: MockDatabase = new MockDatabase();
  allItems: Item[];

  constructor() { }

  ngOnInit() {
    this.mockdb.ngOnInit();
    this.getAllItems();
  }

  getAllItems() {
    this.allItems = this.mockdb.getItems();
  }

}
