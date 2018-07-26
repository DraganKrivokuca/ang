import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenName: {'username': 'test', 'token': 'fake-jwt-token-test'};
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify({ username, token: user.token }));
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
  }
}
