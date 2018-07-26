import { Observable } from 'rxjs/Observable';
import { AuthService } from './../services/auth.service';
import { CustomMaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/operator/first';

import { User } from '../models/index';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getUser()
    //   .first()
    //   .subscribe(users => {
    //     this.users = users;
    //     console.log(this.users);
    //   });
  }
}

