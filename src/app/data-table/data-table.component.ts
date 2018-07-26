// import { Sort } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
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
  constructor(public userService: UserService) {
      this.source = new LocalDataSource(tableData.data); // create the source
  }
  settings = tableData.settings;
  ngOnInit() {
  }
}
