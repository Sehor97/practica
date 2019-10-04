import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemporalComponent } from './temporal.component';
import { NowComponent } from '../shared/now/now.component';



@NgModule({
  declarations: [TemporalComponent, NowComponent],
  imports: [
    CommonModule
  ],
  exports: [TemporalComponent]
})
export class TemporalModule { }
