import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunRoutingModule } from './fun-routing.module';
import { FunComponent } from './fun.component';
import { YoutubePipe } from './youtube.pipe';


@NgModule({
  declarations: [FunComponent, YoutubePipe],
  imports: [
    CommonModule,
    FunRoutingModule
  ]
})
export class FunModule { }
