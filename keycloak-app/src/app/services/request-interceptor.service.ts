import { Injectable } from '@angular/core';
import { KeycloakSecurityService } from './keycloak-security.service';
import { HttpRequest, HttpHandler, HttpParams, HttpInterceptor } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {
  constructor(private keycloakSecurityService: KeycloakSecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request interceptor ...')
    return of(this.keycloakSecurityService.keycloak)
      .pipe(
        take(1),
        exhaustMap(keycloak => {
          // console.log('keycloak', keycloak)
          if (!keycloak.authenticated) {
            return next.handle(req);
          }
          const modifiedReq = req.clone(
            {
              setHeaders: {
                Authorization: 'Bearer ' + keycloak.token
              }
            }
          );
          return next.handle(modifiedReq);
        })
      );
  }
}
