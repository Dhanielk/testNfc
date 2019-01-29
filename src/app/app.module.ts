import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxElectronModule } from "ngx-electron";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatIconModule, MatButtonModule } from "@angular/material";
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatIconModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
