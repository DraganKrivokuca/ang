import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {

  token = localStorage.getItem('currentUser');
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', user.token);
          localStorage.setItem('role', user.role);
        }
        return user;
      });
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }

    getStatus() {
      console.log(this.getToken());
    }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');

  }
}
