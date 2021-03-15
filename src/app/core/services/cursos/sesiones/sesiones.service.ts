import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlApi} from '../../url/url';
import {TreeModel} from '../../../../shared/models/TreeModel';
import {map} from 'rxjs/operators';
import {SesionesModel} from '../../../../shared/models/SesionesModel';
import {CreateSesionModel} from '../../../../shared/models/CreateSesionModel';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  constructor(private http: HttpClient) {


  }

  obtenerSesiones(idcurso: number): Observable<SesionesModel[]> {

    return this.http.get(urlApi + 'api/resource/listsesiones/' + idcurso).pipe(map((source: SesionesModel[]) => {
      return source;
    }));

  }

  dataSesion(idsesion: number): Observable<TreeModel[]> {

    return this.http.get(urlApi + 'api/resource/sesiones/' + idsesion).pipe(map((source: TreeModel[]) => {
      return source;
    }));
  }

  descargar(url:string){

    return this.http.get(urlApi+"api/"+url,{
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  borrarSesion(id):Observable<any>{

    return this.http.delete(urlApi+"api/resource/sesion/"+id);
  }

  crearSesion(data:CreateSesionModel):Observable<any>{


    return this.http.post(urlApi+"api/resource/sesion",data);
  }

}
