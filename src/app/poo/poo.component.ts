import {Component, Input, OnInit} from '@angular/core';
import {Thepoo} from "../thepoo";
import {UserService} from "../user.service";

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss']
})
export class PooComponent implements OnInit {

  @Input() poos: Thepoo[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  thePoo(id: number, poo: Thepoo){
    this.userService.pooID(id);
    this.userService.addPoo(poo);
    this.userService.thePooInQuestion(poo);
  }



}
