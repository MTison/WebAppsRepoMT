import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router, private permissionsService: NgxPermissionsService) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('loggedUser')) {
            //logged in so return true
            const permission = JSON.parse(localStorage.getItem('loggedUser')).role;
            this.permissionsService.flushPermissions();
            this.permissionsService.addPermission(permission);
            return true;
        }
 
        //not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}