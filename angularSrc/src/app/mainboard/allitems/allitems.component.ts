import { ItemService } from '../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {
  allItems: Item[];
  searchItems: Item[];

  constructor(private alertService: AlertService,private itemService: ItemService) { }

  ngOnInit() {
    this.geefAllItems();
  }

  geefAllItems() {
    this.itemService.getAllItems().subscribe(
      items => {
        this.allItems = items;
        this.searchItems = items;
        this.sortByProductName();
      },
      error => {
        this.alertService.error(error);
      }
    );
  }

  filterItems(searchValue) {
    this.searchItems = [];
    if (searchValue != "") {
      this.allItems.forEach(element => {
        if (element.productname.toUpperCase().indexOf(searchValue.toUpperCase()) > -1) {
          this.searchItems.push(element);
        }
      });
    } else {
      this.searchItems = this.allItems;
    }
  }

  //Sort function fot the students in the current class
  sortByProductName() {
    this.allItems.sort((a: Item, b: Item) => {
      if (a.productname < b.productname) {
        return -1;
      } else if (a.productname > b.productname) {
        return 1;
      } else {
        return 0;
      }
    })
  }
}
