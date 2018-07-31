// import { decode } from '../../../node_modules/jwt-decode';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {
  AdminToken = "Admin";
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {

    // const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('currentUser');
    // console.log(token)

    const tokenPayload = decode(token);

    if (tokenPayload.role === this.AdminToken) {
      // this.router.navigate(['table']);
      return true;
    }
    return false;
  }
}
