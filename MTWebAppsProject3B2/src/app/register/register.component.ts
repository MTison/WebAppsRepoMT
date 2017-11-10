import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: FormGroup;
  private registeredUser: User;

  @Output() public newUser = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      firstname: ['',[Validators.required,Validators.pattern('[a-zA-Z.éèçùà]*')]], //sets the formcontrol for the formgroup and a default value
      lastname: ['',[Validators.required,Validators.pattern('[a-zA-Z.éèçùà]*')]],
      username: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
      email: ['',[Validators.required,Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')]],
    })
  }

  onSubmit() {
    this.newUser.emit(new User(this.user.value.username,this.user.value.firstname,this.user.value.lastname,this.user.value.email));
    this.newUser.subscribe(user => this.registeredUser = user);
  }

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

  /*
  getUser() {
    return this._user;
  }
  onSubmit() {
    this.newUser.emit(this._user);
  }
  */

  /*
  addUser(newUser : HTMLInputElement) :boolean {
    this._user._firstname = newUser.value;
    return false;
  }
  */
}
