import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
// import { User } from './../auth/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/index';

@Injectable()
export class UserService {
  model: any = {};
  constructor(private http: HttpClient, private authenticationService: AuthService) { }
  test: {'username': 'test', 'token': 'fake-jwt-token-test'};
  // tokenTest: any = {
  //   username: 'test',
  //   token: 'fake-jwt-token-test'
  // };

  // getUser() {
  //   if ( this.authenticationService.getToken() === this.tokenTest.token) {
  //     return this.http.get<User[]>('http://demo6797980.mockable.io/user/test');
  //   } else {
  //     return this.http.get<User[]>('http://demo6797980.mockable.io/user/admin');
  //   }
  // }
  // getUser() {
  //   if  {
  //     return this.http.get<User[]>('http://demo6797980.mockable.io/user/test');
  //   } else {
  //     return this.http.get<User[]>('http://demo6797980.mockable.io/user/admin');
  //   }
  // }
}
