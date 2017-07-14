import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import {UserService} from "./user.service";
import { HeaderComponent } from './header/header.component';
import { CrudComponent } from './crud/crud.component';
import {PooService} from "./poo.service";
import { PooComponent } from './poo/poo.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    HeaderComponent,
    CrudComponent,
    PooComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PooService],
  bootstrap: [AppComponent]
})
export class AppModule { }
