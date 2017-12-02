import { Item } from "./item.model";
import { User } from "./user.model";


export class ItemList {
    private _id: string;
    private _listName: string;
    private _items: Item[] = [];
    private _user: User;
    private _itemIds: string[] = [];
    private _userId: string;

    constructor(listName: string,items: Item[],user: User) {
        this._listName = listName;
        this._items = items;
        this._user = user;
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