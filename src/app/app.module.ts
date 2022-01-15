import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IsinFormComponent } from './isin-form/isin-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ManagementComponent } from './management/management.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IsinFormComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
