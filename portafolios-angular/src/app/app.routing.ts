import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { ProyectDetailComponent } from './components/proyect-detail/proyect-detail.component';


const appRoutes : Routes = [
    {path:'',component:AboutComponent},
    {path:'sobreMi',component:AboutComponent},
    {path:'contacto',component:ContactComponent},
    {path:'crearProyecto',component:CreateProjectComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'proyecto/:id' , component :ProyectDetailComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders :any [] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);