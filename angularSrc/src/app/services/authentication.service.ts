import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {

    constructor (private http: Http) { }

    login(username: string, password: string) {
        return this.http.post("/users/authenticate",{username: username, password: password}).map((response: Response) => {
            let user = response.json();
            //if there is a user object from the response AND it has a jwt token,
            //we put the user data in the localstorage to keep the user logged in
            if(user && user.token) {
                localStorage.setItem("loggedUser",JSON.stringify(user));
            }
            return user;
        });
    }

    logout() {
        localStorage.clear(); //clearing the storage to log the current user out
    }
}