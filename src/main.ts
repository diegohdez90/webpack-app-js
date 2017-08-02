import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main } from './app/containers';
import { Navbar } from './app/ui';

import "./reset.css";
import "./style.css";

@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        Main,
        Navbar,
    ],
    imports : [
        BrowserModule,
    ],
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
