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

  constructor(private route: ActivatedRoute,private router: Router,private authService: AuthenticationService) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.user.username,this.user.password);
    this.router.navigate(['/mainboard']);
  }

  register() {
    this.router.navigate(['/register']);
  }

}
