import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


  constructor(private cookieService: CookieService,private router:Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const checked: boolean = this._checkToken();
    let request = req;
    if (checked != false) {

      request = req.clone({

        setHeaders: {
          Authorization: 'Bearer ' + this._getToken()

        },



      });


    }

    return next.handle(request).pipe(catchError((err:HttpErrorResponse )=> {



      if(err.status==404 || err.status==400  || err.status==401 || err.status==502){
        this.cookieService.deleteAll("/");
        this.router.navigate(["/login"]);
      }


      return throwError(err);

    }));
  }


  private _getToken(): string {
    return this.cookieService.get('auth').toString();
  }

  private _checkToken(): boolean {

    return this.cookieService.check('auth');

  }

}
