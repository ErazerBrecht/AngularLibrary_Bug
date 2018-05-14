import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthModule} from '@auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
