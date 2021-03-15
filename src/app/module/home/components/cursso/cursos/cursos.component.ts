import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {CursosService} from '../../../../../core/services/cursos/cursos.service';
import {MisCursos} from '../../../../../shared/models/misCursos';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CursosComponent implements OnInit {

  data: MisCursos[];

  margin;
  numberes;
  currentid:number;

  constructor(private cursosService: CursosService, private router: Router) {
  }

  ngOnInit(): void {

 /*   this.router.events.pipe(filter(e => {
      return e instanceof NavigationStart;
    })).subscribe((value:NavigationStart) => {

      this.currentid=this.router.getCurrentNavigation().extras.state.

    });*/
    this.cursosService.misCursos().subscribe(value => {

      this.data = value;

      this.numberes = value.length;
      console.log(this.numberes);
      if (this.numberes <= 3) {

        this.margin = 'inherit';
      } else {

        this.margin = 'auto';
      }
    }, error => {
      console.log(error);
    });


  }

  ingresar(id: number) {



    this.router.navigate(['/curso'], {
      skipLocationChange: true, replaceUrl: false,state:{
        id:id
      }
    });


  }


}
