import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urlApi} from '../../url/url';
import {CrearFOlder} from '../../../../shared/models/CrearFOlder';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http:HttpClient) { }

  borrarFolder(id:number):Observable<any>{

    return this.http.delete(urlApi+"api/resource/folder/"+id);

  }

  crearFolder(data:CrearFOlder):Observable<any>{

    return this.http.post(urlApi+"api/resource/folder",data);
  }
}
