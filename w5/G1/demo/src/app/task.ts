export class Task {
  id: number;
  title: string;
  isDone: boolean;

  constructor(title: string = '') {
    this.title = title;
    this.isDone = false;
  }
}
