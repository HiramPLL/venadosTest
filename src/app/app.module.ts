import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { MaterialModule } from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { SidenavService } from './venadosTest/services/sidenav.service'
import { DataApiService } from './venadosTest/services/data-api-service'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AppRouting } from './app-routing';
import { FullComponent } from './venadosTest/layouts/full/full.component';


@NgModule({
  declarations: [
    AppComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRouting,
  ],
  providers: [SidenavService,DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

