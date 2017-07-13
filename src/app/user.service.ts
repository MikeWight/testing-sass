import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  users: User[] = [{
    name:"Dubm", nickname: "Time"
  },
    {
      name: "mike", nickname:"Awesome"
    }];

  constructor() { }


  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }


}
