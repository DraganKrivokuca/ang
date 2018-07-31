import { DataService } from './../data.service';
import { data } from './smart-data-table';
// import { Sort } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';
import { User } from '../models/user.model';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../data-table/smart-data-table';



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  source: LocalDataSource;
  users: User[] = [];
  datasNews = [];
  constructor(public userService: UserService) {
    this.source = new LocalDataSource(tableData.data);
  }

  settings = tableData.settings;

  ngOnInit() {
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
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      // tslint:disable-next-line:no-unused-expression
      event.newData['name'];
      event.confirm.resolve(event.newData);
      event.newData = this.datasNews;
      // console.log(this.datasNews);

    } else {
      event.confirm.reject();
    }
  }

}
