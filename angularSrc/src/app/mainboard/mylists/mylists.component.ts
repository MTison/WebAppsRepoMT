import { ItemService } from '../../services/item.service';
import { ItemListService } from '../../services/itemList.service';
import { Component, OnInit } from '@angular/core';
import { ItemList } from '../../models/itemList.model';
import { AlertService } from '../../services/alert.service';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-mylists',
  templateUrl: './mylists.component.html',
  styleUrls: ['./mylists.component.css']
})
export class MylistsComponent implements OnInit {
  itemLists: ItemList[] = [];
  allItems: Item[] = [];
  listItems: Item[] = [];

  rangeItems: ItemList[] = [];
  pages: number[] = [];
  activePage: number = 0;

  loading: boolean = true;

  constructor(
    private alertService: AlertService,
    private itemListService: ItemListService,
    private itemService: ItemService) { }

  ngOnInit() {
    this.geefAllItemLists();
    this.geefAllItems();
  }

  geefAllItemLists() {
    this.itemListService.getAllItemLists().subscribe(
      itemlists => {
        this.itemLists = itemlists;
        this.pageButtons();
        this.setPage(1);
      }
    );
  }
  geefAllItems() {
    this.itemService.getAllItems().subscribe(
      items => {
        this.allItems = items;
      } 
    );
  }

  geefAllListItems(id: string) {
    let list = this.itemLists.find(itemlist => itemlist._id == id);
    list.itemIds.forEach(itemId => {
        let item = this.allItems.find(item => item._id == itemId);
        this.listItems.push(item);
      }
    );

    this.loading = false;
    return this.listItems;
    // let currentUser: User;
      // this.userService.getUserById(userId._id).subscribe(
      //   user => {
      //     currentUser = user;
      //   }
      // );
  }

  setPage(page){
    this.activePage = page;
    this.createRange(3);
  }
  createRange(number){
    this.rangeItems.length = 0;
    for(var i = number * (this.activePage-1); i < number * this.activePage; i++){
      if(this.itemLists[i])
        this.rangeItems.push(this.itemLists[i]);
    }
  }
  pageButtons() {
    let number: number = 0;
    if ((this.itemLists.length+1) % 3 == 0 || (this.itemLists.length+1) / 3 == 1) {
      number = (this.itemLists.length+1) / 3;
    } else {
      number = ((this.itemLists.length+1) / 3) +1;
    }

    for(let i=1;i<=number;i++) {
      this.pages.push(i);
    }
  }

}
