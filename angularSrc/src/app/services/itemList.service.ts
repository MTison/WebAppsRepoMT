import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { ItemList } from '../models/itemList.model';
 
@Injectable()
export class ItemListService {

    constructor(private http: Http) { }
 
    create(itemList: ItemList) {
        return this.http.post('/itemlists/create', itemList);
    }
    getItemListById(_id: string){
        return this.http.get('/itemlists/current/' + _id).map((response: Response) => response.json())
            .map(itemList => new ItemList(itemList._listName,itemList._itemIds,itemList._userId,itemList._id));
    }
    getAllItemLists() {
        return this.http.get('/itemlists/').map((response: Response) => response.json());
    }
    update(itemList: ItemList) {
        return this.http.put('/itemlists/' + itemList._id, itemList);
    }
    delete(_id: string) {
        return this.http.delete('/itemlists/' + _id);
    }   
}