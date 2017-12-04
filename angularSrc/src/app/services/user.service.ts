import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/user.model';
 
@Injectable()
export class UserService {

    constructor(private http: Http) { }
 
    create(user: User) {
        return this.http.post('/users/register', user);
    }
    getUserById(_id: string){
        return this.http.get('/users/current/' + _id,).map((response: Response) => response.json())
            .map(user => new User(user._username,user._firstName,user._lastName,user._email,user._id));
    }
    update(user: User) {
        return this.http.put('/users/' + user._id, user);
    }
    delete(_id: string) {
        return this.http.delete('/users/' + _id);
    }   
}