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
import { PooHolderComponent } from './poo-holder/poo-holder.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth/auth.service";
import {AuthenticationComponent} from "./auth/authentication.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    HeaderComponent,
    CrudComponent,
    PooComponent,
    PooHolderComponent,
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, PooService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
