import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('intercept', request);
    return next.handle(request);
  }

  // handleError(error) {
  //   console.log('error');
  //   window.alert(`Status: ${error.status}; Message: ${error.message}`);
  //   // sentry.push(error)
  //   return throwError(error);
  // }
}
