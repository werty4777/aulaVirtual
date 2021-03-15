import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlApi} from '../url/url';
import {HorarioModel} from '../../../shared/models/horarioModel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }


  getHorario(): Observable<HorarioModel[]> {


    return this.http.get(urlApi + 'api/dashboard/horario').pipe(map((value: HorarioModel[]) => {

      return value;
    }));

  }
}
