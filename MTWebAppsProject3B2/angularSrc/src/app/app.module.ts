import { AuthenticationService } from './services/authentication.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainboardComponent } from './mainboard/mainboard.component';
import { CreatelistComponent } from './mainboard/createlist/createlist.component';
import { AllitemsComponent } from './mainboard/allitems/allitems.component';
import { MylistsComponent } from './mainboard/mylists/mylists.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainboardComponent,
    CreatelistComponent,
    AllitemsComponent,
    MylistsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
