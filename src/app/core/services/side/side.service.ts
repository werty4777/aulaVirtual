import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {urlApi} from '../url/url';
import {LittleProfile} from '../../../shared/models/littleProfile';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SideService {

  constructor(private http:HttpClient) { }

   name():Promise<LittleProfile>{


    return this.http.get(urlApi+"api/user").pipe(map((value:LittleProfile) => {

      return value;
    })).toPromise();
  }

}
