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

  userHer(user:User){
    this.user = user;
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
  }

}
