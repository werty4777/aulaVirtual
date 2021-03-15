import {NgModule} from '@angular/core';
import {CoreModule} from '../../core/core.module';
import {HomeRountingModule} from './home.rounting.module';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CursosComponent} from './components/cursso/cursos/cursos.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {CursoPageComponent} from './components/cursoDetail/curso-page/curso-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {CursoRecursosComponent} from './components/cursoDetail/curso-recursos/curso-recursos.component';
import {CursosNotasComponent} from './components/cursoDetail/cursos-notas/cursos-notas.component';
import {CursosAnunciosComponent} from './components/cursoDetail/cursos-anuncios/cursos-anuncios.component';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {CookieService} from 'ngx-cookie-service';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {CursosAsistenciaComponent} from './components/cursoDetail/cursos-asistencia/cursos-asistencia.component';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {CdkTableModule} from '@angular/cdk/table';
import {ProfileComponent} from './components/profile/profile/profile.component';



@NgModule({

  imports: [
    CoreModule, HomeRountingModule, MatExpansionModule, CommonModule, MatCardModule, MatButtonModule, MatSidenavModule, MatFormFieldModule, MatBadgeModule, MatTabsModule, MatTreeModule, MatIconModule, MatMenuModule, MatDividerModule
    , MatListModule, MatDialogModule, MatListModule, MatTableModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule, CdkTableModule

  ],
  providers: [CookieService],
  declarations: [HomeComponent, DashboardComponent, CursosComponent, CursoPageComponent, CursoRecursosComponent, CursosNotasComponent, CursosAnunciosComponent,CursosAsistenciaComponent,ProfileComponent],
  exports: []
})
export class HomeModule {

}


