import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path : '',
        component : TasksComponent
    },
    {
        path : 'about', component : AboutComponent
    },
    {
        path : 'contact', component : ContactComponent
    },
    {
        path : '**',
        redirectTo : ''
    }
])
