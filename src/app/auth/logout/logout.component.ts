import {Component} from "@angular/core";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent {

    constructor(private authService: AuthService,
    private router: Router){

    }

    onLogout() {
        this.authService.logout()
          .subscribe(
            data => {
              console.log(data);
              localStorage.clear();
            },
            error => {console.log(error)}
          );
        this.router.navigate(['/auth', 'signin']);
    }

}
