import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent implements OnInit {
   showCreateList: string = "";
   createList: boolean = false;
   showAllItems: string = "";
   allItems: boolean = false;
   showMyLists: string = "";
   myLists: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.showCreateList = "active";
    this.createList = true;
  }

   showCreateListBoard() {
    this.showCreateList = "active";
    this.createList = true;
    this.showAllItems = "";
    this.allItems = false;
    this.showMyLists = "";
    this.myLists = false;
  }
   showAllItemsBoard() {
    this.showAllItems = "active";
    this.allItems = true;
    this.showCreateList = "";
    this.createList = false;
    this.showMyLists = "";
    this.myLists = false;
  }
   showMyListsBoard() {
    this.showMyLists = "active";
    this.myLists = true;
    this.showCreateList = "";
    this.createList = false;
    this.showAllItems = "";
    this.allItems = false;
  }
}
