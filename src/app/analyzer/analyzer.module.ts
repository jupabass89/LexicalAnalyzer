import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerComponent } from './analyzer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AnalyzerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [AnalyzerComponent]
})
export class AnalyzerModule { }

