import { location } from 'ngx-bootstrap/utils/facade/browser';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  newItem: any = {
    "kind" : "",
    "inShop" : "",
  };

  constructor(private alertService: AlertService, private itemService: ItemService) { }

  ngOnInit() { }

  addItem() {
    console.log(this.newItem);
    this.itemService.create(this.newItem).subscribe(
      data => {
        this.alertService.success("Item was created");
        this.newItem = {
          "kind" : "",
          "inShop" : "",
        };
      }
    );
  }

}
