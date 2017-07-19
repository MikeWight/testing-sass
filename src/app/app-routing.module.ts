import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NgModule} from '@angular/core';
import {PooHolderComponent} from "./poo-holder/poo-holder.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LogoutComponent} from "./auth/logout/logout.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'poo', component: PooHolderComponent},
  {path: 'auth', component: AuthenticationComponent, children: [
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'logout', component: LogoutComponent},
  ]},
  {path: '**', redirectTo: 'auth'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
