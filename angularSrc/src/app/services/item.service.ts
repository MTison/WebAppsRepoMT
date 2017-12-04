import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Item } from '../models/item.model';
 
@Injectable()
export class ItemService {

    constructor(private http: Http) { }
 
    create(item: Item) {
        return this.http.post('/items/create', item);
    }
    getItemById(_id: string){
        return this.http.get('/items/current/' + _id).map((response: Response) => response.json())
            .map(item => new Item(item._productName,item._mark,item._productKind,item._inShops,item._id));
    }
    getAllItems() {
        return this.http.get('/items/').map((response: Response) => response.json());
    }
    update(item: Item) {
        return this.http.put('/items/' + item._id, item);
    }
    delete(_id: string) {
        return this.http.delete('/items/' + _id);
    }   
}