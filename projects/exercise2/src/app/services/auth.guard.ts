import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
/**
 * The canActivate function is called by the Angular router to determine if a route can be activated
 * @param {ActivatedRouteSnapshot} route - ActivatedRouteSnapshot - The route that is being activated.
 * @param {RouterStateSnapshot} state - RouterStateSnapshot
 * @returns A boolean or UrlTree
 */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
/**
 * The canLoad function is called when the router is about to load a module
 * @param {Route} route - Route - The route that is being loaded.
 * @param {UrlSegment[]} segments - An array of URL segments.
 * @returns A boolean or UrlTree.
 */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return false;
  }
}
