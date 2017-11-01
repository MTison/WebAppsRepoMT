import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**'}
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}

export const routing = RouterModule.forRoot(routes);