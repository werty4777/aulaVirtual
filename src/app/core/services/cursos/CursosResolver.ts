import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {MisCursos} from '../../../shared/models/misCursos';
import {Observable} from 'rxjs';
import {CursosService} from './cursos.service';

@Injectable({
  providedIn:"root"
})
export class CursosResolver implements Resolve<MisCursos>{


  constructor(private cursosService:CursosService,private route:Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MisCursos> | Promise<MisCursos> | MisCursos {


    let id = this.route.getCurrentNavigation().extras.state;



    try {
      return this.cursosService.detallesCurso(id.id).then(value => {

        return value;
      })

    }catch (e){

      this.route.navigate(["/"]);
    }





  }

}
