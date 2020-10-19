import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerRoutingModule } from './computer-routing.module';
import { ComputerFormComponent } from './computer-form/computer-form.component';
import { ComputerListComponent } from './computer-list/computer-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [ComputerFormComponent, ComputerListComponent],
  imports: [
    CommonModule,
    ComputerRoutingModule,
    AppRoutingModule,
    FormsModule
  ], exports: [
    ComputerFormComponent,
    ComputerListComponent
  ]
})
export class ComputerModule { }
