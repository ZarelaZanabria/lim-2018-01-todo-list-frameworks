import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Importar el Servicio donde esta los metodos 
import { TareasService } from '../../../services/tareas.service';

//Tareas Class
import { Tareas } from '../../../models/tareas';

// toastr
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-tarea-add',
  templateUrl: './tarea-add.component.html',
  styleUrls: ['./tarea-add.component.css']
})
export class TareaAddComponent implements OnInit {

  //Requerimos nuestro Servicio que contiene los metodos
  constructor(
    private tareaService: TareasService,
    private toastr: ToastrService 
    ) { }

  /*Inicializamos el arreglo donde se guardan los datos
  crea el arreglo dentro del servicio */
  ngOnInit() {
    //Me trae todo el arreglo de datos
    this.tareaService.getTareas();
    this.resetForm();

  }
  /*Agregar el metodo para que sea utilizado en el html
  para poder agregar una nueva tarea */
  onSubmit(tareaForm: NgForm) {
    if (tareaForm.value.$key == null) {
      this.tareaService.insertTarea(tareaForm.value);
      this.resetForm(tareaForm);
    }
    else {
      this.tareaService.updateTarea(tareaForm.value);
      this.resetForm(tareaForm);
      this.toastr.success('Operacion Satisfactoria', 'Product Registered');
    }

  }

  /*Resetear el formulario cuando resivimos el formulario dera de tipo NgForm
      ? siginifica que es opcional */
  resetForm(tareaForm?: NgForm) {
    if (tareaForm != null) {
      tareaForm.reset();
      this.tareaService.selectedTarea = new Tareas;

    }
  }
}
