import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {
  items: string[] = [];

  constructor() { }

  ngOnInit() {
    this.items.length = 0;
    for(let i=0;i<=25;i++) {
      this.items.push("value");
    }
  }

}
