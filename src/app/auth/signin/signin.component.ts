import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    constructor(private authService: AuthService,
    private router: Router){

    }

    ngOnInit(): void {
        this.myForm = new FormGroup({
            email: new FormControl("mike@hotmail.com", [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl("123123", Validators.required)
        });
    }

    onSubmit(){
      console.log("got here at leaset");
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.authService.signin(user)
          .subscribe(
            data => {
              console.log(data);
              localStorage.setItem('token', data.token);
            },
            error => console.log(error)
          );

    }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
