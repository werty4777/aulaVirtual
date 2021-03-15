import {Injectable} from '@angular/core';
import {LittleProfile} from '../../../../shared/models/littleProfile';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SideService} from '../side.service';
import {CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export  class SideResolver implements Resolve<LittleProfile>{


  constructor(private sideService:SideService,private router:Router,private cookieSevice:CookieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<LittleProfile> {

    return this.sideService.name().then(value => {

      if(value){
        this.cookieSevice.set("teacher",String(value.teacher))
      return value;
      }else{
        this.router.navigate(["/login"]);
        return;
      }


    });




  }

}
