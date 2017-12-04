import { Item } from "./item.model";
import { User } from "./user.model";


export class ItemList {
     _id: string;
     _listName: string;
     _items: Item[] = [];
     _user: User;
     _itemIds: string[] = [];
     _userId: string;

    constructor(listName: string,itemIds: string[],userId: string,id?: string) {
        this._listName = listName;
        this._itemIds = itemIds;
        this._userId = userId;
        this._id = id;
    }

    toJSON() {
        return {
            id: this._id,
            listName: this._listName,
            items: this._items,
            user: this._user
        };
    }
}