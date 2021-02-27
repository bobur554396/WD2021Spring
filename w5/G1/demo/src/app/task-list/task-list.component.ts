import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;

  constructor() {
    this.newTasks = [];
    this.doneTasks = [];
    this.currentTask = new Task();
  }

  ngOnInit(): void {
  }


  addToDo(): void {
    if (this.currentTask.title !== '') {
      this.currentTask.id = this.newTasks.length + 1;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task();
    }
  }

  onRemove(index: number) {
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }

  onDoneChange(task: Task) {
    if (task.isDone) {
      this.onRemove(task.id);
      this.doneTasks.push(task);
    } else {
      this.doneTasks = this.doneTasks.filter((x) => x.id !== task.id);
      this.newTasks.push(task);
    }
  }

}


//
// interface Animal {
//   run();
//   sleep();
// }
//
// class Dog implements Animal {
//   run() {
//
//   }
//
//   sleep() {
//
//   }
// }
//
// class Cat implements Animal {
//   run() {
//
//   }
//
//   sleep() {
//
//   }
// }
