import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Table } from './table';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Data } from '@angular/router';


// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class TableService {
  url = 'https://tabledata-4132a.firebaseio.com/data.json';
  constructor(private http: HttpClient) { }

  storeData(data: any[]) {
    return this.http.post(this.url, data);
  }

  getData() {
  return this.http.get(this.url);
}

}
