import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from "./tasks/tasks.component";
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    {
        path: 'about', component
        : AboutComponent
    },
    {
        path: 'contact', 
        component: ContactComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [RouterModule],
    providers : []
})

export class AppRoutingModule {}
