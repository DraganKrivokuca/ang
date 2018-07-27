import { fakeBackendProvider } from './_helpers/fake-backend';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { AppRoutingModule} from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import 'hammerjs';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component' ;
// import { Ng2SmartTableModule } from '../ng2-smart-table';

// import { Ng2SmartTableModule } from '../../node_modules/ng2-smart-table';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
// import { Ng2CompleterModule } from '../../node_modules/ng2-completer';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { JwtInterceptor } from './_helpers/index';
import { JwtHelperService as _JwtHelperService } from '@auth0/angular-jwt';
import { RoleGuardService } from './auth';

export const JwtHelperService  = {
  provide: _JwtHelperService,
  useFactory: () => {
    return new _JwtHelperService();
  }
 };

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    DataComponent,
    LoginComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  providers: [
    AuthService,
    RoleGuardService,
    AuthGuard,
    UserService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
    },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class AppModule { }
