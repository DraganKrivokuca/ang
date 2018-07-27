import { DataComponent } from './data/data.component';
import { TableComponent } from './table/table.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuardService } from './auth/role-guard.service';


const routes: Routes = [
  {path : '', component : LoginComponent},
  { path: 'table', component: TableComponent, canActivate: [AuthGuard, RoleGuardService], data: {
    expectedRole: 'Test'
  } },
  { path: 'data', component: DataComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
