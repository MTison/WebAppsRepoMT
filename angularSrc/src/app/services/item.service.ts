import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Item } from '../models/item.model';
 
@Injectable()
export class ItemService {
    //inDevelopment: boolean = true;
    inDevelopment: boolean = false;

    constructor(private http: Http) { }
 
    create(item: Item) {
        return this.http.post(this.prepEndPoint('/items/create'), item);
    }
    getItemById(_id: string){
        return this.http.get(this.prepEndPoint('/items/current/' + _id)).map((response: Response) => response.json())
            .map(item => new Item(item.productname,item.mark,item.kind,item.inShop,item._id));
    }
    getAllItems() {
        return this.http.get(this.prepEndPoint('/items/')).map((response: Response) => response.json())
            .map((items: Array<Item>) => {
                console.log(items);
                let result:Array<Item> = [];
                items.forEach(item => {
                    let itm = new Item(item.productname,item.mark,item.kind,item.inShop,item._id);
                    result.push(itm);
                });
                return result;
            });
    }
    update(item: Item) {
        return this.http.put(this.prepEndPoint('/items/' + item._id), item);
    }
    delete(_id: string) {
        return this.http.delete(this.prepEndPoint('/items/' + _id));
    }
    
    prepEndPoint(endPoint) {
        if(this.inDevelopment) {
            return 'http://localhost:4000'+endPoint;
        } else {
            return 'https://mtwebappsproject.herokuapp.com'+endPoint;
        }
    }
}