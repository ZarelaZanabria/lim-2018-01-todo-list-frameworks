import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Importamos la Clase
import { Tareas } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  //Any tipo de dato que trae desde Firebase
  tareaList : AngularFireList<any>;

  //Creamos un Tarea en donde no vamos a seleecionar nada 
  selectedTarea : Tareas = new Tareas();
  //Permite Registrar en la base de datos
  constructor(private firebase : AngularFireDatabase) { }
  //Metodos para obtener los datos de la base de datos de Firebase
  getTareas() {//Asignarle la lista de elementeos y toda la lista esta alamcenada en tareas
    return this.tareaList = this.firebase.list('tareas');
  }
  //Vamos a utilizar un parametro Tarea que sera de clase Tareas 
  insertTarea(tarea : Tareas){
    //Agregamos Datos a la Lista con este tenemos la Tarea que vamos a insertar
    this.tareaList.push({
      descripcion: tarea.descripcion
    });
  }
  updateTarea (tarea : Tareas){
    this.tareaList.update(tarea.$key,{
      descripcion: tarea.descripcion
    });

  }
  deleteTarea($key : string){
    this.tareaList.remove($key);

  }


}
