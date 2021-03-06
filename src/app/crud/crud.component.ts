import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Thepoo} from "../thepoo";
import {User} from "../user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  poo : Thepoo;
  subscription: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'size': new FormControl(null, Validators.required),
      'smell': new FormControl(null, Validators.required)
    });
    this.subscription = this.userService.getPooEmitter()
      .subscribe((poo: Thepoo) => {
        if (poo){
          this.poo = poo;
          this.signupForm.controls['size'].setValue(this.poo.size);
          this.signupForm.controls['smell'].setValue(this.poo.smell);
        }
      });
  }

  onSubmit(){
    console.log(this.signupForm.get('size'));
    this.poo = {
      size: this.signupForm.get('size').value,
      smell: this.signupForm.get('smell').value,
      dateAndTime: new Date()
    };
    this.addPoo();
    this.clearThePoo();
  }

  userGotTime(){
    return this.userService.userGotMode();
  }

  editingTime(){
    return this.userService.editingMode();
  }



  addPoo(){
    this.userService.addPoo(this.poo);
  }
  deletePoo(){
    this.userService.removePoo();
    this.clearThePoo();
  }

  clearThePoo(){
    this.signupForm.reset();
    this.userService.removePooId();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
