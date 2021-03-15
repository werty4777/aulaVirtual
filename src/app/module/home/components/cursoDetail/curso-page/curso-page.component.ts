import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MisCursos} from '../../../../../shared/models/misCursos';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.css']
})
export class CursoPageComponent implements OnInit, AfterViewInit {

  id: number;
  teacher;
  data: MisCursos;

  constructor(public router: Router, private route: ActivatedRoute, private cookie: CookieService) {
    try {
      this.id=this.router.getCurrentNavigation().extras.state.id;
      this.teacher = this.cookie.get('teacher');
      console.log(this.teacher);

    } catch (e) {
      this.router.navigate(['/home']);
    }


  }

  ngOnInit(): void {

     this.route.data.subscribe(value => {
       console.log(value);

       this.data = value.data;

     });

    this.router.navigate(['/curso/anuncios'], {
      skipLocationChange: true, replaceUrl: false, state: {
        id: this.id
      }
    });


  }

  changeRoute(url) {

    let index = url.index;

    if (index == 3) {

      this.router.navigate(['/curso/asistencia'], {
        skipLocationChange: true, replaceUrl: false, state: {
          id: this.id
        }
      });

    }

    if (index == 2) {
      this.router.navigate(['/curso/notas'], {
        skipLocationChange: true, replaceUrl: false, state: {
          id: this.id
        }
      });
    }

    if (index == 1) {

      this.router.navigate(['/curso/recursos'], {
        skipLocationChange: true, replaceUrl: false, state: {
          id: this.id
        }
      });
    }
    if (index == 0) {
      this.router.navigate(['/curso/anuncios'], {
        skipLocationChange: true, replaceUrl: false, state: {
          id: this.id
        }
      });

    }

  }

  ngAfterViewInit(): void {

  }

}
