/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { AmarComponent } from './amar/amar.component';
import { YassaComponent } from './yassa/yassa.component';


export function keycloakFactory(keycloakSecurityService: KeycloakSecurityService) {
  return () => keycloakSecurityService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    SuppliersComponent,
    AmarComponent,
    YassaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */
