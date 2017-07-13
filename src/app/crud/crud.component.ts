import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  addUser(){
    this.userService.addUser({
      name: "Steve",
      nickname: "The killer"
    });
  }

}
