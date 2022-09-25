import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';


/* This is the routing for the lazy loaded module. */
const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/* It's a module that imports the LazyRoutingModule and exports it */
export class LazyRoutingModule { }

