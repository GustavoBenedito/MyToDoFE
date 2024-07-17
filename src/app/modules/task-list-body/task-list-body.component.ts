import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list-body',
  templateUrl: './task-list-body.component.html',
  styleUrl: './task-list-body.component.scss'
})
export class TaskListBodyComponent {
  dataList: string[] = [ 'item1', 'item2', 'item3'];
  
}
