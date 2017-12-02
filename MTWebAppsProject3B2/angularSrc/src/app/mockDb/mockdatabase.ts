import { ItemList } from '../models/itemList.model';
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Item } from "../models/item.model";
import { User } from "../models/user.model";


export class MockDatabase implements OnInit {
    mockItems: Item[] = [];
    mockUsers: User[] = [];
    mockItemLists: ItemList[] = [];

    ngOnInit() {
        this.mockDataUsers();
        this.mockDataItems();
        this.mockUsers.forEach(user => this.mockDataItemLists(user));
    }

    getUsers() {
        return this.mockUsers;
    }
    getItems() {
        return this.mockItems;
    }
    getItemLists() {
        return this.mockItemLists;
    }

    mockDataUsers() {
        for (let i = 0; i < 5; i++) {
            this.mockUsers.push(new User("Username" + i, "User" + i, "lastname" + i, "user" + i + "@example.com"))
        }
    }
    mockDataItems() {
        for (let i = 0; i < 20; i++) {
            let random: number = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            switch (random) {
                case 1: this.mockItems.push(new Item("Product" + i, "randomMark", "Vleeswaren", ["Delhaize", "Carrefour"]));
                    break;
                case 2: this.mockItems.push(new Item("Product" + i, "randomMark", "Zuivel", ["Delhaize", "Carrefour"]));
                    break;
                case 3: this.mockItems.push(new Item("Product" + i, "randomMark", "Bakkerij", ["Delhaize", "Carrefour"]));
                    break;
                case 4: this.mockItems.push(new Item("Product" + i, "randomMark", "Dranken", ["Delhaize", "Carrefour"]));
                    break;
            }
        }
    }
    mockDataItemLists(user: User) {
        for (let i = 0; i < 5; i++) {
            let randomItems: Item[] = [];
            let random: number = Math.floor(Math.random() * (20 - 1 + 1)) + 1;

            for (let j = 0; j < random; j++) {
                randomItems.push(this.mockItems[j]);
            }

            this.mockItemLists.push(new ItemList("list" + i, randomItems, user))
        }
    }
}