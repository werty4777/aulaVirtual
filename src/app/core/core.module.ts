import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {HomeService} from './services/home/home.service';
import {CookieService} from 'ngx-cookie-service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/AuthInterceptor';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {CursosService} from './services/cursos/cursos.service';
import {MatBadgeModule} from '@angular/material/badge';
import {SideService} from './services/side/side.service';
import {SesionesService} from './services/cursos/sesiones/sesiones.service';
import {FolderService} from './services/cursos/folders/folder.service';
import {ArchivosService} from './services/cursos/archivos/archivos.service';
import {AsistenciaService} from './services/cursos/asistencia/asistencia.service';
import {CommonModule} from '@angular/common';
import {SideResolver} from './services/side/resolvers/SideResolver';
import {NotasService} from './services/cursos/notas/notas.service';
import {UserService} from './services/profile/user.service';


@NgModule({

  imports: [MatSidenavModule, MatIconModule, HttpClientModule, RouterModule, MatBadgeModule, CommonModule],
  providers: [HomeService, CookieService, {

    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

  }, CursosService, SideService, SesionesService,FolderService,ArchivosService,AsistenciaService,SideResolver,NotasService,UserService],
  declarations: [SidebarComponent, NavbarComponent],
  exports: [SidebarComponent, NavbarComponent]

})
export class CoreModule {

}
