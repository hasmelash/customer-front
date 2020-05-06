import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule, MatToolbarModule} from "@angular/material";
import { CustomerComponent } from './components/customer/customer.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./services/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
