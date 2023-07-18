// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44351/api/',
  clientId: 'b773e72f-3205-4abd-bf85-0e922ffd09b9',
  authority: 'https://login.microsoftonline.com/b8634501-c092-4bf5-8ad8-07329bfb2e90',
  apiListScopes: 'api://b773e72f-3205-4abd-bf85-0e922ffd09b9/access_via_approle_assignments',
  userGroup: "7cac2836-2203-4e5f-9b73-4991d7c67173",
  adminGroup: "434f14b5-1b0c-4d36-889a-4eda95ab0c57"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
