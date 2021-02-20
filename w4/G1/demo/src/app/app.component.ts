import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  message: string;
  num: number;
  flag: boolean;
  numbers: number[] = [3, 4, 10, 2];
  students: any [] = [
    {
      id: '20BD123123',
      full_name: 'Student 1'
    },
    {
      id: '20BD123124',
      full_name: 'Student 2'
    },
    {
      id: '20BD123125',
      full_name: 'Student 3'
    }
  ];
  display: string;
  todoList: string[] = [];

  constructor() {
    console.log('constructor running');

    this.message = 'Message 1';
    this.num = 10;
    this.flag = false;

    this.display = '';
  }

  btnClicked() {
    this.flag = !this.flag;
  }

  addTodo() {
    if (this.display !== '') {
      this.todoList.push(this.display);
    }
    this.display = '';
  }

  removeTodo(index: number) {
    this.todoList.splice(index, 1);
  }

}
