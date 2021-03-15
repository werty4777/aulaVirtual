import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {urlApi} from '../url/url';
import {TokenModel} from '../../../shared/models/TokenModel';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }


  authenticate(username: string, password: string): Observable<TokenModel> {

    const login = {
      username: username,
      password: password
    };

    return this.http.post(urlApi + 'login',login).pipe(map((value: TokenModel) => {

      return value;

    }));


  }

}
