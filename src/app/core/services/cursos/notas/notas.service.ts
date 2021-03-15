import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotasModel} from '../../../../shared/models/NotasModel';
import {map} from 'rxjs/operators';
import {urlApi} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) {
  }


  getNotas(idcurso: number): Observable<NotasModel[]> {
    return this.http.get(urlApi + 'api/cursos/' + idcurso + '/nota').pipe(map((value: NotasModel[]) => {
      return value;
    }));
  }


  guardarNotas(idcurso: number, data): Observable<any> {

    return this.http.post(urlApi + 'api/cursos/' + idcurso + '/nota', data);


  }

}
