import { Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthenticationService {
    logedIn: boolean = false;

    constructor () {
    }

    isAuthenticated() {
        return this.logedIn;
    }

    login(username: string, password: string) {
        console.log(username + " " + password);
    }
}