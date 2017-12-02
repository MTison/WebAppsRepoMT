import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylists',
  templateUrl: './mylists.component.html',
  styleUrls: ['./mylists.component.css']
})
export class MylistsComponent implements OnInit {
  items: string[] = [];

  constructor() { }

  ngOnInit() {
    this.items.length = 0;
    for (let i = 0; i <= 10; i++) {
      this.items.push("value");
    }
  }

}
