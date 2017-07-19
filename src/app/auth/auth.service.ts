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
        return this.http.post('http://localhost:3000/authentication', body, {headers: headers})
          .map((response: Response) => response.json())
          .catch((error: Response) => {
            console.log('youp 2');
            return Observable.throw(error.json())

          });
    }

    signin = (user: User) => {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/authentication/signin', body, {headers: headers})
          .map((response: Response) => response.json())
          .catch((error: Response) => {
            return Observable.throw(error.json())
          });
    };

    logout(){

      const headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      });

      return this.http.delete('http://localhost:3000/authentication/logout', {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => {
          return Observable.throw(error)
        });
    }

    isLoggedIn(){
        return localStorage.getItem('token') != null;
    }
}
