import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentGuard implements CanActivate {
  continents:Array<string>;
  constructor(private router: Router){
    this.continents=['africa', 'oceania', 'n-america','s-america', 'europe', 'asia']
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(next.params.continent);
      if(this.continents.includes(next.params.continent)){
        return true;
        
      }else{
        this.router.navigate(['/error'])
      }
  }
}
