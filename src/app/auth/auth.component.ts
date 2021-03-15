import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/services/auth/auth.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  _formGroup: FormGroup = new FormGroup({
    username: new FormControl('', control => {
      control.setValidators(Validators.required);

      return control;
    }),
    password: new FormControl('', control => {
      control.setValidators(Validators.required);

      return control;
    })
  });
  submitted = false;

  constructor(private auth: AuthService,private cookieService:CookieService,private router:Router) {
  }

  ngOnInit(): void {


  }

  ingresar() {
    const username = this._formGroup.controls.username.value.toString();
    const password = this._formGroup.controls.password.value.toString();

    this.auth.authenticate(username, password).subscribe(value => {

      this.cookieService.set("auth",value.token,0.02083,"/","aulavirtualheroku.herokuapp.com");

      alert('logeado');

        this.router.navigate([""]);

    });
  }

}
