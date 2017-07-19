import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {User} from "../user.model";
import {Router} from "@angular/router";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router) {

    }

    myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName

        );
        this.authService.signup(user)
          .subscribe(
            data => {

              localStorage.setItem('token', data.token);
              this.router.navigate(['./poo']);
            },
            error => console.error(error)
          );
    }

}
