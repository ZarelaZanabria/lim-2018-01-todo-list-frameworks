import { Component, OnInit } from '@angular/core';

//Importar el Servicio donde esta los metodos 
import { TareasService } from '../../../services/tareas.service';

//Tareas Class
import { Tareas } from '../../../models/tareas';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {

  tareaList: Tareas[];
  /*Comectarnos con el Servicio en donde estan los métodos 
  Nos traemos el servicio y la importamos en el constructor*/
  constructor(private tareaService: TareasService) { }

  /**Necesitamos mostrar los datos de Firebase y para ello vamos a ejecutar
    ocurren dentro de la base e datos
   */
  ngOnInit() {
    /* Ejecutamos el metodo que nos permite traer todos los datos de Firebase
    Para ello utilizamos snapshotChanges que nos trae todo los cambios que 
    ocurren dentro de la base e datos */
    this.tareaService.getTareas()
      .snapshotChanges()
      .subscribe(item =>)

  }

}
