import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './pages/projects/projects.component';


export const routes: Routes = [ {path:'', component: AppComponent},
{ path: 'projects', component: ProjectsComponent }, 
];
