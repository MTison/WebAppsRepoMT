import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent implements OnInit {
  private showCreateList: string = "";
  private createList: boolean = false;
  private showAllItems: string = "";
  private allItems: boolean = false;
  private showMyLists: string = "";
  private myLists: boolean = false;
  

  constructor() { }

  ngOnInit() {
    this.showCreateList = "active";
    this.createList = true;
  }

  private showCreateListBoard() {
    this.showCreateList = "active";
    this.createList = true;
    this.showAllItems = "";
    this.allItems = false;
    this.showMyLists = "";
    this.myLists = false;
  }
  private showAllItemsBoard() {
    this.showAllItems = "active";
    this.allItems = true;
    this.showCreateList = "";
    this.createList = false;
    this.showMyLists = "";
    this.myLists = false;
  }
  private showMyListsBoard() {
    this.showMyLists = "active";
    this.myLists = true;
    this.showCreateList = "";
    this.createList = false;
    this.showAllItems = "";
    this.allItems = false;
  }
}
