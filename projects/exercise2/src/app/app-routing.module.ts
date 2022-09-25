import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

/* This is the routing configuration for the application. */
const routes: Routes = [
/* This is a lazy loaded route. */
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
/* This is a route guard. It is a service that is used to protect routes. */
  {
    path: 'secure',
    loadChildren: () => import('./secure/secure.module').then(m => m.SecureModuleModule),
    canActivate:[AuthGuard],
    canLoad:[AuthGuard]
  },
/* This is a default route. If the user navigates to the root of the application, they will be redirected to the empty string. */
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
