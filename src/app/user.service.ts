import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  users: User[] = [
    {
      name:"Dubm",
      nickname: "Time",
      poos: [
        {
        size: 12,
        smell: 4,
        dateAndTime: new Date()
      },
        {
          size: 8,
          smell: 2,
          dateAndTime: new Date()
        }
      ]
    },
    {
      name: "mike",
      nickname:"Awesome",
      poos: [
        {
        size: 10,
        smell: 7,
        dateAndTime: new Date()
      },
        {
          size: 13,
          smell: 9,
          dateAndTime: new Date()
        }
      ]
    }];

  constructor() { }


  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }


}
