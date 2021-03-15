import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlApi} from '../url/url';
import {MisCursos} from '../../../shared/models/misCursos';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) {
  }


  misCursos(): Observable<MisCursos[]> {

    return this.http.get(urlApi + 'api/cursos').pipe(map((value: MisCursos[]) => {

      return value;
    }));

  }

  detallesCurso(idcurso: number): Promise<MisCursos> {


    return this.http.get(urlApi + 'api/cursos/' + idcurso).pipe(map((value: MisCursos) => {

      return value;
    })).toPromise();
  }

}
