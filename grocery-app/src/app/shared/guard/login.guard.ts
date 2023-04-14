import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private route:Router,private toast:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('User_login_Token');
      if (token) {
        // alert("You already have logged in")
        this.toast.warning("You already have logged in")
        return this.route.navigate(['/']);
         
      } else {
        return true;
      }
  }
  
}
