import {EventEmitter, Injectable} from '@angular/core';
import {User} from "./user";
import {Thepoo} from "./thepoo";

@Injectable()
export class UserService {

  id: number;
  pooId: number = null;
  userLoaded: boolean = false;
  editMode: boolean = false;
  newPooLoaded = new EventEmitter<Thepoo>();

  users: User[] = [
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

  getPooEmitter(){
    return this.newPooLoaded;
  }

  getUsers(){
    return this.users;
  }

  addUser(user: User){
    this.users.push(user);
  }
  userGotMode(){
    return this.userLoaded;
  }

  editingMode(){
    return this.editMode;
  }

  thePooInQuestion(poo: Thepoo){
    this.newPooLoaded.emit(poo);
  }

  userID(id: number){
    this.id = id;
    this.pooId = null;
    this.editMode = false;
    this.userLoaded = true;
    let poo: Thepoo = {
      size: null,
      smell: null,
      dateAndTime: new Date()
    };
    this.newPooLoaded.emit(poo);
  }

  pooID(id: number){
    this.pooId = id;
    this.editMode = true;
  }

  removePooId(){
    this.pooId = null;
    this.editMode = false;
  }

  addPoo(poo: Thepoo){
    if (!this.editMode){
      this.users[this.id].poos.push(poo);
    } else {
      this.users[this.id].poos[this.pooId] = poo;
    }
  }

  removePoo(){
    this.users[this.id].poos.splice(this.pooId, 1);
  }

  resetEverything(){
    this.id = null;
    this.pooId = null;
    this.userLoaded = false;
    this.editMode = false;
    this.newPooLoaded.emit(null);
  }
}
