import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  
  allUsers: User[] = [];
  previousUrl: string;
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    if (!localStorage.getItem("userCount"))
      localStorage.setItem("userCount","0");

    console.log(localStorage.getItem("userCount"));
    this.userService.getAllUsers().subscribe(
      data => {
        if(data.length > parseInt(localStorage.getItem("userCount"))) {
          this.alertService.success("You are registerd as "+data[parseInt(localStorage.getItem("userCount"))].username);
        }
        localStorage.setItem("userCount",data.length.toString());
        console.log(localStorage.getItem("userCount"));
      },
      error => {
        this.alertService.error(error);
      }
    );

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
          this.alertService.error("Ongeldige inloggegevens");
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
    this.ngOnInit();
  }
}
