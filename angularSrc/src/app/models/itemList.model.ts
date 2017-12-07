import { Item } from "./item.model";
import { User } from "./user.model";


export class ItemList {
     _id: string;
     listname: string;
     items: Item[] = [];
     user: User;
     itemIds: string[] = [];
     userId: string;

    constructor(listname: string,itemIds: string[],userId: string,id?: string) {
        this.listname = listname;
        this.itemIds = itemIds;
        this.userId = userId;
        this._id = id;
    }

    toJSON() {
        return {
            id: this._id,
            listname: this.listname,
            items: this.items,
            user: this.user,
            itemIds: this.itemIds,
            userId: this.userId,
        };
    }
}