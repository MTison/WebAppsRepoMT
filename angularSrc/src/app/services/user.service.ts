import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user.model';
 
@Injectable()
export class UserService {
    //inDevelopment: boolean = true;
    inDevelopment: boolean = false;

    constructor(private http: Http) { }
 
    create(user: User) {
        return this.http.post(this.prepEndPoint('/users/register'), user);
    }
    getAllUsers() {
        return this.http.get(this.prepEndPoint('/users/')).map((response: Response) => response.json())
            .map((users: Array<User>) => {
                console.log(users);
                let result:Array<User> = [];
                users.forEach(user => {
                    let usr = new User(user.username,user.firstName,user.lastName,user.email,user.role,user._id);
                    result.push(usr);
                });
                return result;
            });
    }
    getUserById(_id: string) {
        return this.http.get(this.prepEndPoint('/users/current/' + _id)).map((response: Response) => response.json());
    }
    update(user: User) {
        return this.http.put(this.prepEndPoint('/users/' + user._id), user);
    }
    delete(_id: string) {
        return this.http.delete(this.prepEndPoint('/users/' + _id));
    } 

    prepEndPoint(endPoint) {
        if(this.inDevelopment) {
            return 'http://localhost:4000'+endPoint;
        } else {
            return 'https://mtwebappsproject.herokuapp.com'+endPoint;
        }
    }
}