import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Supplier } from '../suppliers/suppliers.component';
import { KeycloakSecurityService } from './keycloak-security.service';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient, private keycloakSecurityService: KeycloakSecurityService) { }


  public getSuppliers() {
    return this.http
      .get<Supplier[]>('http://localhost:8083/suppliers').pipe(
        catchError(this.handleError),
        // tap(data => console.log('data', data))
      );
  }



  private handleError(errorRes: HttpErrorResponse) {
    console.log('errorRes', errorRes)
    let errorMessage = 'an unknown error occured';
    if (!errorRes.error || !errorRes.error.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
      case 'Forbidden':
        errorMessage = 'Vous n\'avez pas les droits ! ou vous n\'êtes pas logger';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'this Email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'this password is not correct';
        break;

    }
    return throwError(errorMessage);
  }
}
