import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerHomeComponent } from './eager-loading-module/eager-home/eager-home.component';
import { EagerChild0Component } from './eager-loading-module/eager-child0/eager-child0.component';
import { EagerChild1Component } from './eager-loading-module/eager-child1/eager-child1.component';

const routes: Routes = [
  /*
  {path:'', redirectTo:'eager_loading', pathMatch: 'full'},
  {path:'eager_loading', component:EagerHomeComponent, children:[
    {path:'', redirectTo:'child1', component:EagerChild0Component, pathMatch: 'full'},
    {path:'child1', component: EagerChild0Component},
    {path:'child2', component: EagerChild1Component},
    {path:'**', component: EagerChild0Component}
  ]
  }*/
  {path:'', redirectTo:'eager_loading', pathMatch: 'full'},
  {path:'eager_loading', component:EagerHomeComponent},
  {path:'child1', component: EagerChild0Component},
  {path:'child2', component: EagerChild1Component},
  {path:'lazy', loadChildren: () => import('./lazy-loading-module/lazy-loading-module.module').then(m => m.LazyLoadingModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
