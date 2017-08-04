import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    templateUrl : './app/courses/courses.component.html',
    styleUrls : ['./app/courses/courses.component.css']
})

export class CoursesComponent {
    courses = [
        {
            "name" : "MTA: Database Administration Fundamentals",
            "dates" : "June 2013",
            "location": "Facultad de Ciencias de la Computación",
            "url" : "https://goo.gl/C7007p"
        },
        {
            "name" : "Data Lakes for Big Data",
            "dates" : "May 2015 - June 2015",
            "location" : "EMC Corporation",
            "url" : " https://goo.gl/S6wHNt"
        },
        {
            "name" : "Desarrollando con PHP y Microsoft Azure",
            "dates" : "December 2015",
            "location" : "Microsoft Virtual Academy",
            "url" : " https://goo.gl/CLVFP9"
        },
        {
            "name" : "Migración de Bases de Datos de 11g a 12c",
            "dates" : "May 2016",
            "location" : "Facultad de Ciencias de la Computación",
            "url" : " https://goo.gl/sNvC7K"
        },
        {
            'name': 'Aspectos Fundamentales sobre Microsoft Azure',
            "dates" : "May 2016",
            "location": "Microsoft Virtual Academy",
            "url" : "https://goo.gl/7wTMub"
        }
    ]

}
