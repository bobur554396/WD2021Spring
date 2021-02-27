import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() {
    console.log('class constructor TaskItemComponent');
  }

  ngOnInit(): void {
    console.log('ng in init TaskItemComponent');
  }

  ngOnChanges(): void {
    console.log('ng on change TaskItemComponent');
  }

  ngOnDestroy(): void {
    console.log('ng on destroy TaskItemComponent');
  }


  removeTask(id: number) {
    this.remove.emit(id);
  }

  isDoneChanged() {
    this.done.emit(this.task);
  }

}
