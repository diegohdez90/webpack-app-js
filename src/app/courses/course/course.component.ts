import { Component, Input } from "@angular/core";

@Component({
    selector : 'course',
    templateUrl: './app/courses/course/course.component.html',
    styleUrls : ['./app/courses/course/course.component.css']
})

export class CourseComponent {
    @Input() course = {}

} 
