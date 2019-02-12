import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesoresComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
