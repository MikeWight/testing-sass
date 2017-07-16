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
  editingMode: boolean;
  resetValidate: boolean =false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetValidate = true;
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
    let poo: Thepoo = {
      size: this.signupForm.get('size').value,
      smell: this.signupForm.get('smell').value,
      dateAndTime: new Date()
    };
    this.poo = poo;
    this.addPoo();
    this.clearThePoo();
  }

  userGotTime(){
    return this.userService.userGotMode();
  }

  editingTime(){
    return this.userService.editingMode();
  }

  validForm(){
    if (!this.resetValidate){
      return (!this.signupForm.get('size').valid
        && this.signupForm.get('size').touched) ||
        (!this.signupForm.get('smell').valid &&
        this.signupForm.get('smell').touched)
    }
    this.resetValidate = false;
    return true;
  }

  addPoo(){
    this.userService.addPoo(this.poo);
  }
  deletePoo(){
    this.userService.removePoo();
  }
  modifyPoo(){
    this.userService.addPoo(this.poo);
  }

  clearThePoo(){
    this.signupForm.reset();
    this.userService.removePooId();
    this.resetValidate = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
