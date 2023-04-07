import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  
    constructor() {}
  
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
      const token = localStorage.getItem('User_login_Token');
      console.log("token",token);
      if (token) {
        const tempTokon  = JSON.parse(token);
        console.log("tempTokon",tempTokon);
        request = request.clone({
          setHeaders: {
            token: JSON.parse(token)
          }
        });
      }
      // console.log("request",request);
  
  
      return next.handle(request);
  
  
    }
  }
