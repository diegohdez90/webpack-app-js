import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main } from './app/containers';
import { Navbar, Task } from './app/ui';

import "../node_modules/normalize-css/normalize.css";
import "./assets/css/bootstrap.min.css";
import "./reset.css";
import "./style.css";

@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        Main,
        Navbar,
        Task
    ],
    imports : [
        BrowserModule,
    ],
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
