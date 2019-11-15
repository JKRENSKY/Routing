import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor (private authService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
                this.authService.isAuthenticated()
                .then(
                    (authenticated: boolean) => {
                        if (authenticated){
                            return true;
                        } else {
                            this.router.navigate(['/'])
                        }
                    }
                )
                }
}