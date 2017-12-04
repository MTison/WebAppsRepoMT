import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylists',
  templateUrl: './mylists.component.html',
  styleUrls: ['./mylists.component.css']
})
export class MylistsComponent implements OnInit {
  items: string[] = [];
  rangeItems: string[] = [];
  pages: number[] = [];

  activePage: number = 0;

  constructor() { }

  ngOnInit() {
    this.items.length = 0;
    for (let i = 1; i <= 10; i++) {
      this.items.push("value"+i);
    }

    this.pageButtons();
    this.setPage(1);
  }

  setPage(page){
    this.activePage = page;
    this.createRange(3);
  }

  createRange(number){
    this.rangeItems.length = 0;
    for(var i = number * (this.activePage-1); i < number * this.activePage; i++){
      if(this.items[i])
        this.rangeItems.push(this.items[i]);
    }
  }

  pageButtons() {
    let number: number = 0;
    if ((this.items.length+1) % 3 == 0 || (this.items.length+1) / 3 == 1) {
      number = (this.items.length+1) / 3;
    } else {
      number = ((this.items.length+1) / 3) +1;
    }

    for(let i=1;i<=number;i++) {
      this.pages.push(i);
    }
  }

}
