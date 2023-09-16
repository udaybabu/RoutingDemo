import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyChild0Component } from './lazy-child0/lazy-child0.component';
import { LazyChild1Component } from './lazy-child1/lazy-child1.component';
const routes: Routes = [
  {path:'', component: LazyHomeComponent },
  {path: 'home', component: LazyHomeComponent},
  {path: 'lazy_child0', component: LazyChild0Component},
  {path: 'lazy_child1', component: LazyChild1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingModuleRoutingModule { }
