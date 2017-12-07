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
import { AdminboardComponent } from './adminboard/adminboard.component';
import { AdditemComponent } from './adminboard/additem/additem.component';
import { AllusersComponent } from './adminboard/allusers/allusers.component';
import { ItemService } from './services/item.service';
import { ItemListService } from './services/itemList.service';

import { AuthGuard } from './_guards/auth.guard';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainboardComponent,
    CreatelistComponent,
    AllitemsComponent,
    MylistsComponent,
    AlertComponent,
    AdminboardComponent,
    AdditemComponent,
    AllusersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    ItemService,
    ItemListService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
