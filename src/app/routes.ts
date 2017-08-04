import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Tasks, About, Contact } from "./containers";

export const routes: ModuleWithProviders = RouterModule.forRoot([
    {
        path : '',
        component : Tasks
    },
    {
        path : 'about', component : About
    },
    {
        path : 'contact', component : Contact
    },
    {
        path : '**',
        redirectTo : ''
    }
])
