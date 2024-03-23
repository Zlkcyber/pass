import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularLibVk18Module } from 'angular-lib-vk18';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AngularLibVk18Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
