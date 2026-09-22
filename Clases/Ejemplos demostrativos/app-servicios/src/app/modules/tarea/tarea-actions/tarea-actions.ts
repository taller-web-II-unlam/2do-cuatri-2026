import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../shared/models/users/tarea.model';
import { TaskService } from '../../../api/servicios/tarea/tarea.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarea-actions',
  imports: [FormsModule, CommonModule],
  templateUrl: './tarea-actions.html',
  styleUrl: './tarea-actions.css'
})
export class TareaActions {

  newTask: string = '';

  constructor(private taskService: TaskService) { }

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTask.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

}
