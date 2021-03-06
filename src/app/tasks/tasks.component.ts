import {Component} from '@angular/core';

@Component({
    selector : 'tasks',
    templateUrl : './app/tasks/tasks.component.html',
    styleUrls : ['./app/tasks/tasks.component.css']
})

export class TasksComponent {

    tasks = [{
        "name": "Programming",
        "description" : "Build angular applications with a own webpack configuration to understand how some webpack rules " +
        " can build fresh application with TipeScript and ES&.",
        "img" : "./assets/img/angular.png"
    },
    {
        "name": "Connect with Github your application",
        "description" : "Connect this application with github to share your job and clone it in other devices to still " +
        "working without losing your advances",
        "img" : "./assets/img/Octocat.png"
    },
    {
        "name" : "Config your Tslint",
        "description": "Add this configuration to analize your Typescript code throught some rules to check errors and " +
        "functionality.",
        "img" : "./assets/img/ts.png"
    }];

}
