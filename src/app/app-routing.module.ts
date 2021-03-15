import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {SideResolver} from './core/services/side/resolvers/SideResolver';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [{
  path: 'login', component: AuthComponent,canActivate:[AuthGuard]
},
  {
    path: '', loadChildren: () => import('./module/home/home.module').then(value => value.HomeModule),resolve:{data:SideResolver}
  },{
  path:"**" ,redirectTo:"login",pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

