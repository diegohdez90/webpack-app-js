import { Component, Input } from '@angular/core';

@Component({
    selector : 'task',
    templateUrl : './app/templates/task.html',
    styleUrls  : ['./app/templates/css/task.css']
})

export class Task  {
    @Input() task = {};

    constructor() {
        
    }
}
