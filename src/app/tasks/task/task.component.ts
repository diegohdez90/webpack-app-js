import { Component, Input } from '@angular/core';

@Component({
    selector : 'task',
    templateUrl : './app/tasks/task/task.component.html',
    styleUrls  : ['./app/tasks/task/task.component.css']
})

export class TaskComponent  {
    @Input() task = {};

    constructor() {
        
    }
}
