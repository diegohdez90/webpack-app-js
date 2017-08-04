import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from "./app.component";

import { NavbarComponent } from "./navbar/navbar.component";
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from "./tasks/task/task.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    bootstrap: [ App ],
    declarations: [
        App,
        NavbarComponent,
        TasksComponent,
        TaskComponent,
        AboutComponent,
        ContactComponent
    ],
    imports : [
        BrowserModule
    ],
})

export class AppModule {}
