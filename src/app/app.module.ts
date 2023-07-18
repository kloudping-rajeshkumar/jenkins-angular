import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IPublicClientApplication, PublicClientApplication, InteractionType } from '@azure/msal-browser';
import {  MsalInterceptor, MsalBroadcastService, MsalInterceptorConfiguration, MsalModule, MsalService,
          MSAL_GUARD_CONFIG, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG, MsalGuardConfiguration, MsalRedirectComponent, ProtectedResourceScopes } from '@azure/msal-angular';
import { msalConfig, loginRequest, protectedResources } from './auth-config';
import { BaseGuard } from './base.guard';
import { GroupGuard } from './group.guard';



/**
 * Here we pass the configuration parameters to create an MSAL instance.
 * For more info, visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/configuration.md
 */
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

/**
* MSAL Angular will automatically retrieve tokens for resources
* added to protectedResourceMap. For more info, visit:
* https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/initialization.md#get-tokens-for-web-api-calls
*/
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string | ProtectedResourceScopes> | null>();

  protectedResourceMap.set(protectedResources.apiTodoList.endpoint, [...protectedResources.apiTodoList.scopes]);

  return {
      interactionType: InteractionType.Popup,
      protectedResourceMap,
  };
}

/**
* Set your default interaction type for MSALGuard here. If you have any
* additional scopes you want the user to consent upon login, add them here as well.
*/
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
      interactionType: InteractionType.Redirect,
      authRequest: loginRequest
  };
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
  },
  {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
  },
  {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
  },
  {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
  },
  MsalService,
  BaseGuard,
  GroupGuard,
  MsalBroadcastService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
