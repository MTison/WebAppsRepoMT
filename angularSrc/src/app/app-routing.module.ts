import { MainboardComponent } from './mainboard/mainboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mainboard', component: MainboardComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
