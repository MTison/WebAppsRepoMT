import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { Component, OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  noUsername: boolean = false;
  newUser: any = {};

  constructor(private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() { }

  onSubmit(useDefault?) {
    if (this.newUser.username == undefined || this.newUser.username == "") {
      this.noUsername = true;
      if (useDefault) {
        this.newUser.username = this.newUser.firstName;
        this.newUser.role = "USER";
        
        this.userService.create(this.newUser).subscribe(
          data => {
            this.router.navigate(["/login"]);
          },
          error => {
            this.alertService.error(error);
          }
        );
      }
    } else {
      this.newUser.role = "USER";
      //creating a new user trough the userService and the model that was filled trough html (newUser)
      this.userService.create(this.newUser).subscribe(
        data => {
          this.router.navigate(["/login"]);
        },
        error => {
          this.alertService.error(error);
        }
      );
    }
  }

  back() {
    //we navigate back to the login page
    this.router.navigate(['/login'])
  }
}
