import { AuthGuard } from './_guards/auth.guard';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'mainboard', component: MainboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['ADMIN','USER'],
            redirectTo: '/login'
        }
    }},
  {path: 'adminboard', component: AdminboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['ADMIN'],
            redirectTo: '/login'
        }
    }},
  {path: '**', component: MainboardComponent, canActivate: [AuthGuard, NgxPermissionsGuard],
    data:{
        permissions: {
            only: ['ADMIN','USER'],
            redirectTo: '/login'
        }
    }},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
