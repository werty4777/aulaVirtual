import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CursosComponent} from './components/cursso/cursos/cursos.component';
import {CursoPageComponent} from './components/cursoDetail/curso-page/curso-page.component';
import {CursoRecursosComponent} from './components/cursoDetail/curso-recursos/curso-recursos.component';
import {CursosNotasComponent} from './components/cursoDetail/cursos-notas/cursos-notas.component';
import {CursosAnunciosComponent} from './components/cursoDetail/cursos-anuncios/cursos-anuncios.component';
import {CursosAsistenciaComponent} from './components/cursoDetail/cursos-asistencia/cursos-asistencia.component';
import {CursosResolver} from '../../core/services/cursos/CursosResolver';
import {ProfileComponent} from './components/profile/profile/profile.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{

    path: '',
    component: DashboardComponent

  },
    {
      path: 'cursos',
      component: CursosComponent,

    },
    {

      path:'curso',
      component:CursoPageComponent,
      children:[{

        path:'anuncios',
        component:CursosAnunciosComponent


      },{

        path:'notas',
        component:CursosNotasComponent
      },{
        path:'recursos',
        component:CursoRecursosComponent
      },{
        path:"asistencia",
        component:CursosAsistenciaComponent
      }

      ],resolve:{data:CursosResolver}

    },{

    path:"profile",
      component:ProfileComponent
    }

  ]
},{

  path:"**",redirectTo:"",pathMatch:"full"
}



];


@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class HomeRountingModule {

}



