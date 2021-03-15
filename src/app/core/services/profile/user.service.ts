import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {urlApi} from '../url/url';
import {map} from 'rxjs/operators';
import {ProfileModel} from '../../../shared/models/ProfileModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  getProfile(): Observable<ProfileModel> {

    return this.http.get(urlApi + 'api/user/profile').pipe(map((value: ProfileModel) => {


      return value;
    }));

  }
}
