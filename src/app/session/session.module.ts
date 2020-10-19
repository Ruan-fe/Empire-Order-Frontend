import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionFormComponent } from './session-form/session-form.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SessionListComponent } from './session-list/session-list.component';


@NgModule({
  declarations: [SessionFormComponent, SessionListComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    SessionFormComponent,
    SessionListComponent
  ]
})
export class SessionModule { }
