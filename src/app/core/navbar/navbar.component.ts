import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  @Input() toggle:any;

  constructor(private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
  }

  toggles(){
    this.toggle.toggle();

  }

  logout() {
    this.cookieService.delete("auth");
    this.cookieService.deleteAll("/");
    this.router.navigate(["/login"]);
  }
}
