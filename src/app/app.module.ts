import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { SessionModule } from './session/session.module';
import { SessionService } from './session.service';
import { ComputerModule } from './computer/computer.module';
import { ComputerService } from './computer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    SessionModule,
    ComputerModule
  ],
  providers: [
    SessionService,
    ComputerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
