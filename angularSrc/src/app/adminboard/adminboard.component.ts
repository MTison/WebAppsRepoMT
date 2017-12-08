import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminboard',
  templateUrl: './adminboard.component.html',
  styleUrls: ['./adminboard.component.css']
})
export class AdminboardComponent implements OnInit {
  showAddItem: string = "";
  addItem: boolean = false;
  showAllUsers: string = "";
  allUsers: boolean = false;
  showAdminAllItems: string = "";
  adminAllItems: boolean = false;

  constructor() { }

  ngOnInit() {
    this.showAddItem = "active";
    this.addItem = true;
  }

  showAddItemBoard() {
    this.showAddItem = "active";
    this.addItem = true;
    this.showAllUsers = "";
    this.allUsers = false;
    this.showAdminAllItems= "";
    this.adminAllItems = false;
  }
  showAllUsersBoard() {
    this.showAllUsers = "active";
    this.allUsers = true;
    this.showAddItem = "";
    this.addItem = false;
    this.showAdminAllItems= "";
    this.adminAllItems = false;
  }
  showAdminAllItemsBoard() {
    this.showAdminAllItems= "active";
    this.adminAllItems = true;
    this.showAddItem = "";
    this.addItem = false;
    this.showAllUsers = "";
    this.allUsers = false;
  }

}
