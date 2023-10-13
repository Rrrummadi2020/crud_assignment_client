import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UriInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    console.log('Hello from Interceptor');
    return next.handle(request.clone({
      url: `http://localhost:3000${request.url}`, setHeaders: {
        'Authorization': `Bearer ${token}`,
      }
    }));
  }
}
