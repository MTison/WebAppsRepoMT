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
  adminLogin: boolean = false;
  user: any = {};
  
  allUsers: User[] = [];
  returnUrl: string;
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
      users => {
        if(users.length > parseInt(localStorage.getItem("userCount"))) {
          this.alertService.success("You are registerd as "+users[parseInt(localStorage.getItem("userCount"))].username);
        }
        localStorage.setItem("userCount",users.length.toString());
        console.log(localStorage.getItem("userCount"));
        this.allUsers = users;
      },
      error => {
        this.alertService.error(error);
      }
    );

    //when the logincomponent is loaded we clear the localstorage of the user that was logged in before
    this.authService.logout();
    
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    if(this.returnUrl == "/")
      this.returnUrl = '/mainboard';
  }

  login(asUser?) {
    this.authService.login(this.user.username,this.user.password)
      //we have to subscribe because it's an observable, we subscribe so we can do something with the observable data
      .subscribe(
        data => {
          let user = this.allUsers.find(user => user._id === data._id);
          if (user.role == "ADMIN") {
            console.log("aaa");
            this.adminLogin = true;
            if (asUser) {
              this.router.navigate(['/adminboard']);
            } else if (asUser == false) {
              this.adminLogin = false;
              this.router.navigate([this.returnUrl]);
            }
          } else {
            //if there is data we navigate to the mainboard with the user logged in
            this.router.navigate([this.returnUrl]);
          }
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
