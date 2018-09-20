import { HttpClient } from '@angular/common/http';
import { data, newData } from './smart-data-table';
// import { Sort } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../models/user.model';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../data-table/smart-data-table';
import { TableService } from './table.service';
import { Table } from './table';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  url = 'http://demo6797980.mockable.io/dataForTable';
  datas = <any>[];
  tableData = [];
  source: LocalDataSource;
  constructor(public userService: UserService, private tService: TableService, private http: HttpClient) {
    this.source = new LocalDataSource(tableData.data);

  }

  settings = tableData.settings;

  getDatas(): void {
    // this.tService.getData()
    // .subscribe(
    //   result => this.datas = result,
    //   error => console.log('Error :' + error)
    // );
  }

  ngOnInit() {
    // this.getDatas();
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      // tslint:disable-next-line:no-unused-expression
      event.newData['name'];
      event.confirm.resolve(event.newData);
      event.newData = this.source;
      // return this.tService.updateDatas(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      // tslint:disable-next-line:no-unused-expression
      event.newData;
      event.confirm.resolve(event.newData);
     this.tableData = event.newData;
      this.tService.storeData(this.tableData)
      .subscribe(data => this.tableData.push(data));
      console.log(data);
      this.tService.storeData(data);
    //  this.tableData.push(this.source.data);
    //  console.log(this.source.data);
    } else {
      event.confirm.reject();
    }
  }

}
