import {Component, Input, OnInit} from '@angular/core';
import {Thepoo} from "../thepoo";

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.scss']
})
export class PooComponent implements OnInit {

  @Input() poos: Thepoo[];

  constructor() { }

  ngOnInit() {
  }

}
