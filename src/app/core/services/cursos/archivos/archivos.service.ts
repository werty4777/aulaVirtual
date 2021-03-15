import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urlApi} from '../../url/url';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private http:HttpClient) { }

  subirArchivo(file:File,nombre:string,descripcion:string,idfolder:string){


    const formData: FormData = new FormData();

    formData.append('file', file, file.name);
    formData.append("nombre",nombre);
    formData.append("desc",descripcion);
    formData.append("idfolder",idfolder);

    formData.forEach((value, key) => {

      console.log(value);
      console.log(key);

    })

    return this.http.post(urlApi+"api/resource/file",formData,{
      reportProgress: true,
      responseType: 'text'
    });

  }
  borrarArchivo(id:number){

    return this.http.delete(urlApi+"api/resource/file/"+id);
  }

}
