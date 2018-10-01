import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TareaComponent } from './components/tarea/tarea.component';
//Firebase
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireModule} from 'angularfire2'
//Importamos el archivo de connexión 
import {environment} from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
