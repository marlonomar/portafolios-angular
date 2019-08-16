import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';

import { routing,appRoutingProviders} from './app.routing';
import { ErrorComponent } from './components/error/error.component';
import { ProyectDetailComponent} from './components/proyect-detail/proyect-detail.component';
import { EditProyectComponent } from './components/edit-proyect/edit-proyect.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ResaltadorDirective } from './directivas/resaltador.directive';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ContactComponent,
    ErrorComponent,
    ProyectDetailComponent,
    EditProyectComponent,
    ColorsComponent,
    ResaltadorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
