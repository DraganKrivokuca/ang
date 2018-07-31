import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let testUser = { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User', role: 'test' };
    let adminUser = { id: 2, username: 'admin', password: 'admin', firstName: 'ADD', lastName: 'Min', role: 'admin' };


    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
        // tslint:disable-next-line:max-line-length
        if (request.body.username === testUser.username || request.body.username === adminUser.username && request.body.password === testUser.password || request.body.password === adminUser.password) {
          if (request.body.username === testUser.username && request.body.password === testUser.password) {
            // tslint:disable-next-line:max-line-length
            return of(new HttpResponse({ status: 200, body: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiVGVzdCIsInJvbGUiOiJUZXN0In0.jreeUGY6FlTfW7r0vUb6qIXhIEtpk2hXy74zenE8s0Y', role: 'Test' } }));

          } else {
            // tslint:disable-next-line:max-line-length
            return of(new HttpResponse({ status: 200, body: { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiQWRtaW4ifQ.NZK-zbodjGs9WUQKY-7gSJ3KI2HkwAp8ys5mIzaSCAY', role: 'Admin' } }));
          }
        } else {
          return throwError('Username or password is incorrect' );
        }
      }

      // get users
      // if (request.url.endsWith('/api/users') && request.method === 'GET') {
      //   if (request.headers.get('Authorization') === 'Bearer fake-jwt-token-test') {
      //     return of(new HttpResponse({ status: 200, body: [testUser] }));
      //   } else if (request.headers.get('Authorization') === 'Bearer fake-jwt-token-admin') {
      //     return of(new HttpResponse({ status: 200, body: [adminUser] }));
      //   } else {
      //     // return 401 not authorised if token is null or invalid
      //     return throwError({ error: { message: 'Unauthorised' } });
      //   }
      // }

      return next.handle(request);

    }))

      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
