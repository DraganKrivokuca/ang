import { Observable } from 'rxjs/Observable';
import { DataTableComponent } from './data-table/data-table.component';
import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [];
  dataUrl = 'http://demo6797980.mockable.io/data';
  constructor(private http: HttpClient) { }

  // setNewData() {
  //   return this.http.post(this.dataUrl);
  // }

}

