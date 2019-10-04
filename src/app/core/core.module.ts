import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { FooterComponent } from './shell/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TemporalComponent } from '../temporal/temporal.component';
import { NowComponent } from '../shared/now/now.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AsideComponent } from './shell/aside/aside.component';




@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TemporalComponent,
    NowComponent,
    NotFoundComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
