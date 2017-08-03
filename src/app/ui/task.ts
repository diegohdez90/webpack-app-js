import { Component, Input } from '@angular/core';

@Component({
    selector : 'task',
    templateUrl : './app/templates/task.html'
})

export class Task  {
    @Input() task = {};

    constructor() {
        
    }
}
