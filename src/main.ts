import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, routes } from './app';
import { Main, Tasks, About, Contact } from './app/containers';
import { Navbar, Task } from './app/ui';

import "./reset.css";
import "../node_modules/normalize-css/normalize.css";
import "./assets/css/bootstrap.min.css";
import "./style.css";

@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        Main,
        Navbar,
        Tasks,
        Task,
        About,
        Contact
    ],
    imports : [
        BrowserModule,
        routes
    ],
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
