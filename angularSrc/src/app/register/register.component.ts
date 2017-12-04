import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: FormGroup;
  registeredUser: User;

  @Output() public newUser = new EventEmitter();

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      //sets the formcontrol for the formgroup and a default value
      firstname: ['',[Validators.required,Validators.pattern('[a-zA-Z.éèçùà]*')]], 
      lastname: ['',[Validators.required,Validators.pattern('[a-zA-Z.éèçùà]*')]],
      username: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      email: ['',[Validators.required,Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]],
      password: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9.éèçùà]*')]],
    });
  }

  onSubmit() {
    //we emit the data given from the form in a new user, using the date in the formgroup. After that we put it in a local var
    this.newUser.emit(new User(this.user.value.username,this.user.value.firstname,
      this.user.value.lastname,this.user.value.email,this.user.value.password));
    this.newUser.subscribe(user => this.registeredUser = user);

    this.userService.create(this.registeredUser).subscribe(
      data => {
        this.router.navigate(["/login"]);
        this.alertService.success("You are registerd as "+this.registeredUser._username, true);
      },
      error => {
        //implementation alertService
        this.alertService.error(error);
      }
    );
  }

  //we get the data from the formbuilder
  get firstname() {
    return this.user.get('firstname');
  }
  get lastname() {
    return this.user.get('lastname');
  }
  get username() {
    return this.user.get('username');
  }
  get email() {
    return this.user.get('email');
  }
  get password() {
    return this.user.get('password');
  }

  back() {
    //we navigate back to the login page
    this.router.navigate(['/login'])
  }
}
