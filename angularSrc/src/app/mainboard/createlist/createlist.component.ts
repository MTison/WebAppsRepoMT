import { User } from '../../models/user.model';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';
import { AlertService } from '../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../../services/itemList.service';
import { ItemList } from '../../models/itemList.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {
  allItems: Item[] = [];
  localList: string[] = [];
  newItemList: ItemList;

  rangeItems: Item[] = [];
  pages: number[] = [];
  activePage: number = 0;

  constructor(
    private alertService: AlertService,
    private itemService: ItemService,
    private itemListService: ItemListService,
    private userService: UserService) { }

  ngOnInit() {
    this.geefAllItems();
  }

  geefAllItems() {
    this.itemService.getAllItems().subscribe(
      items => {
        this.allItems = items;
        this.pageButtons();
        this.setPage(1);
      } 
    );
  }

  addItemToList(id: string) {
    this.localList.push(id);
  }
  removeFromList(id: string) {
    let index: number = this.localList.indexOf(id);
    if (index !== -1) 
        this.localList.splice(index, 1);
  }

  isInList(id: string) {
    let index: number = this.localList.indexOf(id);
    if (index !== -1) 
        return true;
    return false;
  }

  createList() {
    // let listItems: Item[] = [];
    // this.allItems.forEach(item => {
    //   if (this.localList.find(itemid => itemid == item._id)){
    //     this.itemService.getItemById(item._id).subscribe(
    //       item => {
    //         listItems.push(item);
    //       }
    //     )
    //   }
    // });
    // let currentUser: User;
      // this.userService.getUserById(userId._id).subscribe(
      //   user => {
      //     currentUser = user;
      //   }
      // );
    if (this.localList.length != 0) {
      let user: any = JSON.parse(localStorage.getItem("loggedUser"));
      this.newItemList = new ItemList("testList",this.localList,user._id)
      console.log(this.newItemList);
      this.itemListService.create(this.newItemList).subscribe(
        data => {
          this.alertService.success("Created new list");
          this.localList.length = 0;
        },
        error => {
          this.alertService.error("Creating list failed: "+error);
        }
      );
    } else {
      this.alertService.error("Creating list failed: No items in list");
    }
  }

  setPage(page){
    this.activePage = page;
    this.createRange(10);
  }
  createRange(number){
    this.rangeItems.length = 0;
    for(var i = number * (this.activePage-1); i < number * this.activePage; i++){
      if(this.allItems[i])
        this.rangeItems.push(this.allItems[i]);
    }
  }
  pageButtons() {
    let number: number = 0;
    if ((this.allItems.length+1) % 10 == 0 || (this.allItems.length+1) / 10 == 1) {
      number = (this.allItems.length+1) / 10;
    } else {
      number = ((this.allItems.length+1) / 10) +1;
    }

    for(let i=1;i<=number;i++) {
      this.pages.push(i);
    }
  }
}
