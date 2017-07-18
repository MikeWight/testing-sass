import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";

import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/authentication', body, {headers: headers}).toPromise();
    }

    signin = async (user: User) => {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        let loginStatus = await this.http.post('http://localhost:3000/authentication/signin', body, {headers: headers});
        console.log(loginStatus);
    };

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') != null;
    }
}
