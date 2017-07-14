import { Injectable } from '@angular/core';
import {User} from "./user";
import {Thepoo} from "./thepoo";

@Injectable()
export class UserService {

  id: number;
  pooId: number;

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

  addPoo(poo: Thepoo){
    this.users[0].poos.push(poo);
  }

  removePoo(){
    this.users[this.id].poos.splice(this.pooId, 1);
  }

  modifyPoo(poo: Thepoo){
    this.users[this.id].poos[this.pooId] = poo;
  }

}
