// import { decode } from '../../../node_modules/jwt-decode';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {

    // const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('currentUser');
    // console.log(token)

    const tokenPayload = decode(token);

    if (!this.auth.isAuthenticated() || tokenPayload.role === 'Test') {
      // this.router.navigate(['table']);
      return false;
    }
    return true;
  }
}
