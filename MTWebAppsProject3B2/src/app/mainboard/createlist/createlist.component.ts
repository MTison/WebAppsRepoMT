import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {

  items: string[] = [];

  constructor() { }

  ngOnInit() {
    this.items.length = 0;
    for(let i=0;i<=25;i++) {
      this.items.push("value1");
    }
  }

}
