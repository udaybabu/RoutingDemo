import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerHomeComponent } from './eager-home/eager-home.component';
import { EagerChild0Component } from './eager-child0/eager-child0.component';
import { EagerChild1Component } from './eager-child1/eager-child1.component';



@NgModule({
  declarations: [
    EagerHomeComponent,
    EagerChild0Component,
    EagerChild1Component
  ],
  imports: [
    CommonModule
  ]
})
export class EagerLoadingModuleModule { }
