import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    //when the logincomponent is loaded we clear the localstorage of the user that was logged in before
    this.authService.logout();
  }

  login() {
    this.authService.login(this.user.username,this.user.password)
      //we have to subscribe because it's an observable, we subscribe so we can do something with the observable data
      .subscribe(
        data => {
          //if there is data we navigate to the mainboard with the user logged in
          this.router.navigate(['/mainboard']);
        },
        error => {
          //implementation alertService
          this.alertService.error(error);
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }
}
