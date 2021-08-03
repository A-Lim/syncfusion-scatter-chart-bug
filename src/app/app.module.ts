import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, ScatterSeriesService } from '@syncfusion/ej2-angular-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ChartModule,
  ],
  providers: [ScatterSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
