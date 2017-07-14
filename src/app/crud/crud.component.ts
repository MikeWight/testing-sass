import { Component, OnInit, Input } from '@angular/core';
import {Thepoo} from "../thepoo";
import {User} from "../user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  signupForm: FormGroup;
  @Input() poo : Thepoo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'size': new FormControl(null, Validators.required),
      'smell': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    let poo: Thepoo = {
      size: this.signupForm.get('size').value,
      smell: this.signupForm.get('smell').value,
      dateAndTime: new Date()
    }
    this.poo = poo;
    this.addPoo();
  }

  addPoo(){
    this.userService.addPoo(this.poo);
  }
  deletePoo(){
    this.userService.removePoo();
  }
  modifyPoo(){
    this.userService.modifyPoo(this.poo);
  }


}
