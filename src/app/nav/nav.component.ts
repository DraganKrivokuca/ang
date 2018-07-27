import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { CustomMaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/first';

import { User } from '../models/index';
import { UserService } from '../services/';
import { style } from '@angular/animations';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  role: string;
  users: User[] = [];
  hideElement: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.role = localStorage.getItem('role');
    // console.log(this.role);

    // if (this.role === 'Admin') {
    //   this.hideElement = true;
    // } else {
    //   this.hideElement = false;
    // }
  }
}

