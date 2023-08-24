import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExclusiveComponent } from './pages/exclusive/exclusive.component';
import { ExclusiveRoutingModule } from './exclusive-routing.module';

@NgModule({
  declarations: [
    ExclusiveComponent
  ],
  imports: [
    CommonModule,
    ExclusiveRoutingModule
  ]
})
export class ExclusiveModule { }
