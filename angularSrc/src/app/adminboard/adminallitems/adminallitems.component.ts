import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-adminallitems',
  templateUrl: './adminallitems.component.html',
  styleUrls: ['./adminallitems.component.css']
})
export class AdminallitemsComponent implements OnInit {
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

  deleteItem(id: string) {
    let item = this.allItems.find(item => item._id == id);
    this.itemService.delete(id).subscribe(
      data => {
        this.alertService.success("Item '" + item.productname + "' was deleted");
        this.geefAllItems();
      },
      error => {
        this.alertService.error("Deletion failed: "+error);
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
