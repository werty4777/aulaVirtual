import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SideService} from '../services/side/side.service';
import {LittleProfile} from '../../shared/models/littleProfile';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  data:LittleProfile

  constructor(private sideBarService:SideService,private router:Router,private cookieService:CookieService,private route:ActivatedRoute) { }

   ngOnInit() {
    this.route.data.subscribe(value => {
      this.data=value.data;

      console.log(this.data);
    })



  }

  go() {
    this.router.navigate(["/cursos"],{skipLocationChange:true,replaceUrl:false})
  }
  goprofile(){

    this.router.navigate(["/profile"],{
      skipLocationChange:true,
      replaceUrl:false
    });
  }


   getImage():string {
    return "url("+this.data.foto+")";
  }
}
