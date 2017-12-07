import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { ItemList } from '../models/itemList.model';
 
@Injectable()
export class ItemListService {
    inDevelopment: boolean = true;
    //inDevelopment: boolean = false;

    constructor(private http: Http) { }
 
    create(itemList: ItemList) {
        console.log(itemList);
        return this.http.post(this.prepEndPoint('/itemlists/create'), itemList);
    }
    getItemListById(_id: string){
        return this.http.get(this.prepEndPoint('/itemlists/current/' + _id)).map((response: Response) => response.json())
            .map(itemlist => new ItemList(itemlist.listname,itemlist.itemIds,itemlist.userId,itemlist._id));
    }
    getAllItemLists() {
        console.log("aaa");
        return this.http.get(this.prepEndPoint('/itemlists/')).map((response: Response) => response.json())
            .map((itemslists: Array<ItemList>) => {
                console.log(itemslists);
                let result:Array<ItemList> = [];
                itemslists.forEach(itemlist => {
                    let itmlist = new ItemList(itemlist.listname,itemlist.itemIds,itemlist.userId,itemlist._id);
                    result.push(itmlist);
                });
                return result;
            });
    }
    update(itemList: ItemList) {
        return this.http.put(this.prepEndPoint('/itemlists/' + itemList._id), itemList);
    }
    delete(_id: string) {
        return this.http.delete(this.prepEndPoint('/itemlists/' + _id));
    }

    prepEndPoint(endPoint) {
        if(this.inDevelopment) {
            return 'http://localhost:4000'+endPoint;
        } else {
            return 'https://mtwebappsproject.herokuapp.com'+endPoint;
        }
    }
}