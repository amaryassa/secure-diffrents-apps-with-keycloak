import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, DoBootstrap } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { KeycloakSecurityService } from './services/keycloak-security.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { AmarComponent } from './amar/amar.component';
import { YassaComponent } from './yassa/yassa.component';


// export function keycloakFactory(keycloakSecurityService: KeycloakSecurityService) {
//   return () => keycloakSecurityService.init();
// }
const keycloakSecurityService = new KeycloakSecurityService();

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
    // { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: keycloakFactory, multi: true },
    { provide: KeycloakSecurityService, useValue: keycloakSecurityService },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }

  ],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: import("@angular/core").ApplicationRef): void {
    keycloakSecurityService.init().then(data => {
      console.log('authenticated + toke :', data);
      appRef.bootstrap(AppComponent);

    }).catch(err => {
      console.error('err', err);
    });
  }
}
