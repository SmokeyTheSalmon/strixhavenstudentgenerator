import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentGeneratorComponent } from './student-generator/student-generator.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonerGeneratorComponent } from './commoner-generator/commoner-generator.component';

@NgModule({
  declarations: [AppComponent, StudentGeneratorComponent, CommonerGeneratorComponent],
  imports: [BrowserModule, HttpClientModule, MatButtonModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
