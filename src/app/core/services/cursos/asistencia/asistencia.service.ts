import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AsistenciaModel} from '../../../../shared/models/AsistenciaModel';
import {urlApi} from '../../url/url';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) {

  }


  asistencia(idcurso: number): Observable<AsistenciaModel[]> {

    return this.http.get(urlApi + 'api/cursos/asistencia/' + idcurso).pipe(map((value: AsistenciaModel[]) => {

      return value;
    }));


  }


  guardarAsistencia(idcurso:number,asistencia:AsistenciaModel[]):Observable<any>{

    return this.http.post(urlApi+"api/cursos/asistencia/"+idcurso,asistencia);

  }


}
