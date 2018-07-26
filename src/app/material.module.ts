import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];
@NgModule({
imports: [CommonModule, materialModules],
exports: [materialModules],
})
export class CustomMaterialModule { }
