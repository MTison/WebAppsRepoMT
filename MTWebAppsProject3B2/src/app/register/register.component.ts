import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/user.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private user: FormGroup;
  @Output() public newUser = new EventEmitter();

  /*
  @Output() public newUser = new EventEmitter();
  private _user: User;
  */

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      firstname: [''], //sets the formcontrol for the formgroup
      lastname: [''],
      username: [''],
      email: [''],
    })
    //this._user = new User("","","","");
  }
  onSubmit() {
    this.newUser.emit(new User(this.user.value.username,this.user.value.firstname,this.user.value.lastname,this.user.value.email));
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
