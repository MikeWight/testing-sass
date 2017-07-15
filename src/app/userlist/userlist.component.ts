import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  users: User[];
  user: User;

  userHer(id: number, user:User){
    this.user = user;
    this.userService.userID(id);
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

}
