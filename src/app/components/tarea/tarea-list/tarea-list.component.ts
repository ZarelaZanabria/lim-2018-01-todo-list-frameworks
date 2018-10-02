import { Component, OnInit } from '@angular/core';

//Importar el Servicio donde esta los metodos 
import { TareasService } from '../../../services/tareas.service';

//Tareas Class
import { Tareas } from '../../../models/tareas';
// toastr
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {
  //Creamos un Arreglo para poder manipular los datos ya tenemos un arreglo de Tareas

  tareaList: Tareas[];
  /*Comectarnos con el Servicio en donde estan los métodos 
  Nos traemos el servicio y la importamos en el constructor*/
  constructor(
    private tareaService: TareasService,
    private toastr: ToastrService 
    
    )
     { }

  /**Necesitamos mostrar los datos de Firebase y para ello vamos a ejecutar
    ocurren dentro de la base e datos
   */
  ngOnInit() {
    /* Ejecutamos el metodo que nos permite traer todos los datos de Firebase
    Para ello utilizamos snapshotChanges que nos trae todo los cambios que 
    ocurren dentro de la base e datos 
    subscribe escuchando todo los cambios nos trae los propios datos que guardamos 
    */
    return this.tareaService.getTareas()
      .snapshotChanges()
       .subscribe(item =>{
        //Lo inicializamos en blanco
        this.tareaList=[];
        //Recorrer cada item para poder modificar
        item.forEach( element=>{
          //El contemido del element convertimos al Jsony los almacenados en tar
          let tar = element.payload.toJSON();
          tar["$key"]=element.key;
          //Asignamos a la lista el elemento tar que es una Tarea
          this.tareaList.push(tar as Tareas);
        });
      });
  }

  onMarcar($key : string){
    document.getElementById('completed');

  }

  onEdit (tarea : Tareas){
    //Creamos una nueva copia con Object.assign 
    this.tareaService.selectedTarea = Object.assign({},tarea);

  }
  onDelete($key : string){
    if(confirm('Esta segura que desea eliminar esta tarea?')) {
      this.tareaService.deleteTarea($key);
      this.toastr.warning('Deleted Successfully', 'Product Removed');
    }

  }

}
