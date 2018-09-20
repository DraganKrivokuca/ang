import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { CustomMaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


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

 isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUser');
    if (token === null) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
    //   this.role = localStorage.getItem('role');
    //   // console.log(this.role);
    //   if (this.role !== 'Admin') {
    //     return this.hideElement = true;
    //   } else {
    //     return this.hideElement = false;
    //   }
    // }
  }
}
