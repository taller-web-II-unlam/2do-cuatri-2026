import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../api/servicios/tarea/tarea.service';
import { Task } from '../../../shared/models/users/tarea.model';

@Component({
  selector: 'app-tarea-list',
  imports: [],
  templateUrl: './tarea-list.html',
  styleUrl: './tarea-list.css'
})
export class TareaList implements OnInit {

  tareas:Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tareas = this.taskService.getTasks();
    console.log(this.tareas);
    
  }

}
