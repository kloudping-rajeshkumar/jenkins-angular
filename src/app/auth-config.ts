/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { environment } from '../environments/environment'

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
    auth: {
        clientId: environment.clientId, // This is the ONLY mandatory field that you need to supply.
        authority: environment.authority, // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: '/auth', // Points to window.location.origin by default. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri: '/', // Points to window.location.origin by default.
        clientCapabilities: ['CP1'] // This lets the resource server know that this client can handle claim challenges.
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge. Remove this line to use Angular Universal
    },
    system: {
        /**
         * Below you can configure MSAL.js logs. For more information, visit:
         * https://docs.microsoft.com/azure/active-directory/develop/msal-logging-js
         */
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                if(!environment.production)
                     console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    apiTodoList: {
        endpoint: environment.apiUrl,
        scopes: [environment.apiListScopes]
    },
    apiGraph: {
        endpoint: "https://graph.microsoft.com/v1.0/me/checkMemberGroups",
        scopes: ["User.Read", "GroupMember.Read.All"]
    }
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [...protectedResources.apiTodoList.scopes]
};

export const roles = {
    TaskAdmin: "TaskAdmin",
    TaskUser: "TaskUser"
}
export const groups = {

    adminGroup: environment.adminGroup,
    userGroup: environment.userGroup,

}

/**
 * IMPORTANT: In case of overage, group list is cached for 1 hr by default, and thus cached groups 
 * will miss any changes to a users group membership for this duration. For capturing real-time 
 * changes to a user's group membership, consider implementing Microsoft Graph change notifications. 
 * For more information, visit: https://learn.microsoft.com/graph/api/resources/webhooks
 */
export const CACHE_TTL_IN_MS = 60 * 60 * 1000; // 1 hour in milliseconds

