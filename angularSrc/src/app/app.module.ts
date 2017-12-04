import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { CreatelistComponent } from './mainboard/createlist/createlist.component';
import { AllitemsComponent } from './mainboard/allitems/allitems.component';
import { MylistsComponent } from './mainboard/mylists/mylists.component';
import { AlertComponent } from './directives/alert.component';
import { AlertService } from './services/alert.service';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainboardComponent,
    CreatelistComponent,
    AllitemsComponent,
    MylistsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
