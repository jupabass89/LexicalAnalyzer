import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyzerComponent } from './analyzer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoMaterialModule } from '../material-module';

@NgModule({
  declarations: [
    AnalyzerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports: [AnalyzerComponent]
})
export class AnalyzerModule { }

