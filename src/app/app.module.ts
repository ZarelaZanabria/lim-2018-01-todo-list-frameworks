import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

//Firebase
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
//Componentes
import { TareaComponent } from './components/tarea/tarea.component';
import { TareaListComponent } from './components/tarea/tarea-list/tarea-list.component';
import { TareaAddComponent } from './components/tarea/tarea-add/tarea-add.component'

//Servicios 

import { TareasService } from './services/tareas.service';


@NgModule({
  declarations: [
    AppComponent,
    TareaComponent,
    TareaListComponent,
    TareaAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    TareasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
