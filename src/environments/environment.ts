// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Para la conexion con la base de datos 
  firebase: {
    apiKey: "AIzaSyAyNNvKIuaxTGwQHQ4mdLplWyFaMQJtEDc",
    authDomain: "todo-list-angular-68b6f.firebaseapp.com",
    databaseURL: "https://todo-list-angular-68b6f.firebaseio.com",
    projectId: "todo-list-angular-68b6f",
    storageBucket: "todo-list-angular-68b6f.appspot.com",
    messagingSenderId: "995722974802"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
