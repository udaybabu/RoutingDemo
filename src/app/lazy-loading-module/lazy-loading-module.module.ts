import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingModuleRoutingModule } from './lazy-loading-module-routing.module';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyChild0Component } from './lazy-child0/lazy-child0.component';
import { LazyChild1Component } from './lazy-child1/lazy-child1.component';


@NgModule({
  declarations: [
    LazyHomeComponent,
    LazyChild0Component,
    LazyChild1Component
  ],
  imports: [
    CommonModule,
    LazyLoadingModuleRoutingModule
  ]
})
export class LazyLoadingModuleModule { }
