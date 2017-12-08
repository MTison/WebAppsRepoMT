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
  newListName: any = {};

  rangeItems: ItemList[] = [];
  pages: number[] = [];
  activePage: number = 0;

  editedList: ItemList;
  editListname: boolean = false;
  noLists: boolean = false;
  loading: boolean = true;

  constructor(
    private alertService: AlertService,
    private itemListService: ItemListService,
    private itemService: ItemService) { }

  ngOnInit() {
    this.geefAllItemLists();
  }

  geefAllItemLists() {
    this.itemListService.getAllItemLists().subscribe(
      itemlists => {
        this.itemLists = itemlists;
        if (this.allItems.length == 0)
          this.geefAllItems();
        if(this.itemLists.length == 0)
          this.noLists = true;
      }
    );
  }
  geefAllItems() {
    this.itemService.getAllItems().subscribe(
      items => {
        this.allItems = items;
        this.loading = false;
        this.pageButtons();
        this.setPage(1);
      } 
    );
  }

  geefAllListItems(id: string) {
    this.listItems.length = 0;
    let list = this.itemLists.find(itemlist => itemlist._id == id);
    list.itemIds.forEach(itemId => {
        let item = this.allItems.find(item => item._id == itemId);
        this.listItems.push(item);
      }
    );
    return true;
  }

  deleteList(id: string) {
    this.itemListService.delete(id).subscribe(
      data => {
        this.alertService.success("Deleted the choisen list");
        this.removeFromItemLists(id);
        this.createRange(3);
      }
    );
  }
  removeFromItemLists(id: string) {
    let list = this.itemLists.find(itemlist => itemlist._id == id);
    let index: number = this.itemLists.indexOf(list);
    if (index !== -1) 
        this.itemLists.splice(index, 1);
  }

  closeEditListname() {
    this.editListname = false;
  }
  editTitle(id: string) {
    this.editedList = this.itemLists.find(itemlist => itemlist._id == id);
    this.newListName = {
      "listname" : this.editedList.listname
    }
    this.editListname = true;
  }
  saveTitle() {
    if(this.newListName.listname != "" && this.newListName.listname != undefined) {
      this.editedList.listname = this.newListName.listname;
      this.itemListService.update(this.editedList).subscribe(
        data => {
          this.alertService.success("Updated list");
          this.newListName = {};
          this.editListname = false;
          this.geefAllItemLists();
        }
      );
    }
  }

  setPage(page){
    this.activePage = page;
    this.createRange(3);
  }
  createRange(number){
    console.log(this.rangeItems);
    this.rangeItems.length = 0;
    for(var i = number * (this.activePage-1); i < number * this.activePage; i++){
      if(this.itemLists[i])
        this.rangeItems.push(this.itemLists[i]);
    }
    console.log(this.rangeItems);
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
