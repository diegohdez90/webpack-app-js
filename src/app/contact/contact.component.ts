import {Component,AfterViewInit} from "@angular/core";

@Component({
    selector : 'contact',
    templateUrl : './app/contact/contact.component.html',
    styleUrls : ['./app/contact/contact.component.css']
})

export class ContactComponent implements AfterViewInit{
    constructor() {}

    ngAfterViewInit(){
        !(function(d, s, id) {
            var js : any, fjs = d.getElementsByTagName(s)[0];
            //t = window.twttr || {};
            if (!d.getElementById(id)){
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);
            }
            //t._e = [];
            //t.ready = function(f) {
            //t._e.push(f);
        }(document, "script", "twitter-wjs"));
    }
}
