import {Component, OnInit} from '@angular/core';
import {NotasService} from '../../../../../core/services/cursos/notas/notas.service';
import {Examenes, NotasModel} from '../../../../../shared/models/NotasModel';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {ExamenesModelo} from '../../../../../shared/components/ExamenesModelo';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cursos-notas',
  templateUrl: './cursos-notas.component.html',
  styleUrls: ['./cursos-notas.component.css']
})
export class CursosNotasComponent implements OnInit {

  displayedColumns: string[] = ['Alumno', '1er', '2do', '3er', '4to'];


  dataGroup: FormGroup = this.builder.group({

    students: this.builder.array([])

  });


  data: MatTableDataSource<NotasModel>;

  idcurso;


  constructor(private notasService: NotasService, private builder: FormBuilder,public router: Router,) {

    this.idcurso = this.router.getCurrentNavigation().extras.state.id;
  }

  ngOnInit(): void {

    this.cargarAlumnosNotas();

  }

  cargarAlumnosNotas() {
    this.notasService.getNotas(this.idcurso).subscribe(value => {

      this.data = new MatTableDataSource<NotasModel>(value);
      this.establerFormularios();

    });
  }

  establerFormularios() {

    const control = this.dataGroup.get('students') as FormArray;

    this.data.data.forEach(value => {

      control.push(this.establecerFormulario(value));


    });


  }

  establecerFormulario(notas: NotasModel) {

    return this.builder.group({

        id: [notas.idAlumno],
        primerbimestre: this.crearprimerbimestre(notas),
        segundobimestre: this.crearsegundobimestre(notas),
        tercerbimestre: this.creartercerbimestre(notas),
        cuartobimestre: this.crearcuartobimestre(notas),

      }
    );
  }


  crearprimerbimestre(notas: NotasModel) {
    let formArray = this.builder.array([]) as FormArray;


    formArray.push(this.controlesprimerbimestre(notas, 0));
    formArray.push(this.controlesprimerbimestre(notas, 1));
    formArray.push(this.controlesprimerbimestre(notas, 2));


    if (!notas.bimestres[0].editable) {
      formArray.disable();

    }

    return formArray;


  }


  crearsegundobimestre(nota: NotasModel) {
    let formArray = this.builder.array([]) as FormArray;


    formArray.push(this.controlessegundobimestre(nota, 0));
    formArray.push(this.controlessegundobimestre(nota, 1));
    formArray.push(this.controlessegundobimestre(nota, 2));

    if (!nota.bimestres[1].editable) {
      formArray.disable();

    }
    return formArray;


  }

  creartercerbimestre(nota: NotasModel) {
    let formArray = this.builder.array([]) as FormArray;


    formArray.push(this.controlestercerbimestre(nota, 0));
    formArray.push(this.controlestercerbimestre(nota, 1));
    formArray.push(this.controlestercerbimestre(nota, 2));

    if (!nota.bimestres[2].editable) {
      formArray.disable();

    }
    return formArray;
  }

  crearcuartobimestre(nota: NotasModel) {

    let formArray = this.builder.array([]) as FormArray;


    formArray.push(this.controlescuartobimestre(nota, 0));
    formArray.push(this.controlescuartobimestre(nota, 1));
    formArray.push(this.controlescuartobimestre(nota, 2));


    if (!nota.bimestres[3].editable) {
      formArray.disable();

    }

    return formArray;
  }


  verData() {
    let map: ExamenesModelo[] = this.dataGroup.controls.students.value.map(value => {

      let primerbimestre = Object.keys(value).includes('primerbimestre');
      let segundobimesre = Object.keys(value).includes('segundobimestre');
      let tercerbimestre = Object.keys(value).includes('tercerbimestre');
      let cuartobimestre = Object.keys(value).includes('cuartobimestre');


      if (primerbimestre) {


        let map = value.primerbimestre.map(value2 => {

          if (value2.pm.nota == '') {

            delete value2.pm;

          }

          if (value2.em.nota == '') {

            delete value2.em;

          }


          return value2;
        });


        let filter = map.filter(rs => {

          return Object.keys(rs).length != 0;


        });


        let map1 = filter.map(rs2 => {

          let examenes = Object.keys(rs2).map(value1 => {


            let esd: Examenes = {
              // @ts-ignore
              tipo: Number(rs2[value1].idtipo),
              // @ts-ignore
              nota: Number(rs2[value1].nota)


            };

        return esd;
          });

      return examenes;
        });


        var merged = [].concat.apply([], map1);





        if (merged.length != 0) {


          let ex: ExamenesModelo = {
            // @ts-ignore
            idestudiante: value.id,
            ex: merged

          };

          return ex;

        } else {

          return null;
        }


      }
      if (segundobimesre) {
        let map = value.segundobimestre.map(value2 => {

          if (value2.pm.nota == '') {

            delete value2.pm;

          }

          if (value2.em.nota == '') {

            delete value2.em;

          }


          return value2;
        });


        let filter = map.filter(rs => {

          return Object.keys(rs).length != 0;


        });


        let map1 = filter.map(rs2 => {

          let examenes = Object.keys(rs2).map(value1 => {

            let esd: Examenes = {
              // @ts-ignore
              tipo: Number(rs2[value1].idtipo),
              // @ts-ignore
              nota: Number(rs2[value1].nota)


            };


            return esd;
          });

          return examenes;
        });


        var merged = [].concat.apply([], map1);





        if (merged.length != 0) {


          let ex: ExamenesModelo = {
            // @ts-ignore
            idestudiante: value.id,
            ex: merged

          };

          return ex;

        } else {

          return null;
        }

      }
      if (tercerbimestre) {

        let map = value.tercerbimestre.map(value2 => {

          if (value2.pm.nota == '') {

            delete value2.pm;

          }

          if (value2.em.nota == '') {

            delete value2.em;

          }


          return value2;
        });


        let filter = map.filter(rs => {

          return Object.keys(rs).length != 0;


        });


        let map1 = filter.map(rs2 => {

          let examenes = Object.keys(rs2).map(value1 => {


            let esd: Examenes = {
              // @ts-ignore
              tipo: Number(rs2[value1].idtipo),
              // @ts-ignore
              nota: Number(rs2[value1].nota)


            };

            return esd;
          });

          return examenes;
        });


        var merged = [].concat.apply([], map1);





        if (merged.length != 0) {


          let ex: ExamenesModelo = {
            // @ts-ignore
            idestudiante: value.id,
            ex: merged

          };

          return ex;

        } else {

          return null;
        }

      }
      if (cuartobimestre) {
        let map = value.cuartobimestre.map(value2 => {

          if (value2.pm.nota == '') {

            delete value2.pm;

          }

          if (value2.em.nota == '') {

            delete value2.em;

          }


          return value2;
        });


        let filter = map.filter(rs => {

          return Object.keys(rs).length != 0;


        });


        let map1 = filter.map(rs2 => {

          let examenes = Object.keys(rs2).map(value1 => {


            let esd: Examenes = {
              // @ts-ignore
              tipo: Number(rs2[value1].idtipo),
              // @ts-ignore
              nota: Number(rs2[value1].nota)


            };


            return esd;
          });

          return examenes;
        });


        var merged = [].concat.apply([], map1);





        if (merged.length != 0) {


          let ex: ExamenesModelo = {
            // @ts-ignore
            idestudiante: value.id,
            ex: merged

          };

          return ex;

        } else {

          return null;
        }

      }


      return value;
    }).filter(rs => {

      return rs != null;

    });

    this.notasService.guardarNotas(this.idcurso,map).subscribe(value => {

      this.cargarAlumnosNotas();

    },error => {

      console.log(error);
    })




  }


  removervacios(obj) {

    Object.keys(obj).forEach(k =>
      (obj[k] && typeof obj[k] === 'object') && this.removervacios(obj[k]) ||
      (!obj[k] && obj[k] !== undefined) && delete obj[k]
    );
    return obj;

  }

  controlesprimerbimestre(data: NotasModel, id) {


    if (id == 0) {

      let formGroup = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[0].mes[0].marzo[0].examenes != null ? data.bimestres[0].mes[0].marzo[0].examenes.nota == -1 ? '' : data.bimestres[0].mes[0].marzo[0].examenes.nota : ''),
          idtipo: data.bimestres[0].mes[0].marzo[0].examenes != null ? data.bimestres[0].mes[0].marzo[0].examenes.tipo : ''
        }),
        pm: this.builder.group({

          nota: new FormControl(data.bimestres[0].mes[0].marzo[1].practicas != null ? data.bimestres[0].mes[0].marzo[1].practicas.nota == -1 ? '' : data.bimestres[0].mes[0].marzo[1].practicas.nota : ''),
          idtipo: data.bimestres[0].mes[0].marzo[1].practicas != null ? data.bimestres[0].mes[0].marzo[1].practicas.tipo : ''

        })


      });


      return formGroup;
    }
    if (id == 1) {
      let formGroup1 = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[0].mes[1].abril[0].examenes != null ? data.bimestres[0].mes[1].abril[0].examenes.nota == -1 ? '' : data.bimestres[0].mes[1].abril[0].examenes.nota : ''),
          idtipo: data.bimestres[0].mes[1].abril[0].examenes != null ? data.bimestres[0].mes[1].abril[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[0].mes[1].abril[1].practicas != null ? data.bimestres[0].mes[1].abril[1].practicas.nota == -1 ? '' : data.bimestres[0].mes[1].abril[1].practicas.nota : ''),
          idtipo: data.bimestres[0].mes[1].abril[1].practicas != null ? data.bimestres[0].mes[1].abril[1].practicas.tipo : ''
        })


      });
      return formGroup1;

    }

    if (id == 2) {

      let formGroup2 = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[0].mes[2].mayo[1].bimestral != null ? data.bimestres[0].mes[2].mayo[1].bimestral.nota == -1 ? '' : data.bimestres[0].mes[2].mayo[1].bimestral.nota : ''),
          idtipo: data.bimestres[0].mes[2].mayo[1].bimestral != null ? data.bimestres[0].mes[2].mayo[1].bimestral.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[0].mes[2].mayo[0].practicas != null ? data.bimestres[0].mes[2].mayo[0].practicas.nota == -1 ? '' : data.bimestres[0].mes[2].mayo[0].practicas.nota : ''),
          idtipo: data.bimestres[0].mes[2].mayo[0].practicas != null ? data.bimestres[0].mes[2].mayo[0].practicas.tipo : ''
        })


      });
      return formGroup2;


    }

  }

  controlessegundobimestre(data: NotasModel, id: number) {

    if (id == 0) {

      let formGroup = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[0].mayos[0].examenes != null ? data.bimestres[1].mes[0].mayos[0].examenes.nota : ''),
          idtipo: data.bimestres[1].mes[0].mayos[0].examenes != null ? data.bimestres[1].mes[0].mayos[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[0].mayos[1].practicas != null ? data.bimestres[1].mes[0].mayos[1].practicas.nota : ''),
          idtipo: data.bimestres[1].mes[0].mayos[1].practicas != null ? data.bimestres[1].mes[0].mayos[1].practicas.tipo : ''
        })


      });


      return formGroup;
    }
    if (id == 1) {
      let formGroup1 = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[1].junio[0].examenes != null ? data.bimestres[1].mes[1].junio[0].examenes.nota : ''),
          idtipo: data.bimestres[1].mes[1].junio[0].examenes != null ? data.bimestres[1].mes[1].junio[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[1].junio[1].practicas != null ? data.bimestres[1].mes[1].junio[1].practicas.nota : ''),
          idtipo: data.bimestres[1].mes[1].junio[1].practicas != null ? data.bimestres[1].mes[1].junio[1].practicas.tipo : ''
        })


      });

      return formGroup1;

    }

    if (id == 2) {

      let formGroup2 = this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[2].julio[1].bimestral != null ? data.bimestres[1].mes[2].julio[1].bimestral.nota : ''),
          idtipo: data.bimestres[1].mes[2].julio[1].bimestral != null ? data.bimestres[1].mes[2].julio[1].bimestral.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[1].mes[2].julio[0].practicas != null ? data.bimestres[1].mes[2].julio[0].practicas.nota : ''),
          idtipo: data.bimestres[1].mes[2].julio[0].practicas != null ? data.bimestres[1].mes[2].julio[0].practicas.tipo : ''
        })


      });

      return formGroup2;


    }


  }

  controlestercerbimestre(data: any, id: number) {

    if (id == 0) {

      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[0].agosto[0].examenes != null ? data.bimestres[2].mes[0].agosto[0].examenes.nota : ''),
          idtipo: data.bimestres[2].mes[0].agosto[0].examenes != null ? data.bimestres[2].mes[0].agosto[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[0].agosto[1].practicas != null ? data.bimestres[2].mes[0].agosto[1].practicas.nota : ''),
          idtipo: data.bimestres[2].mes[0].agosto[1].practicas != null ? data.bimestres[2].mes[0].agosto[1].practicas.tipo : ''
        })


      });
    }
    if (id == 1) {
      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[1].setiembre[0].examenes != null ? data.bimestres[2].mes[1].setiembre[0].examenes.nota : ''),
          idtipo: data.bimestres[2].mes[1].setiembre[0].examenes != null ? data.bimestres[2].mes[1].setiembre[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[1].setiembre[1].practicas != null ? data.bimestres[2].mes[1].setiembre[1].practicas.nota : ''),
          idtipo: data.bimestres[2].mes[1].setiembre[1].practicas != null ? data.bimestres[2].mes[1].setiembre[1].practicas.tipo : ''
        })


      });

    }

    if (id == 2) {

      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[2].octubre[1].bimestral != null ? data.bimestres[2].mes[2].octubre[1].bimestral.nota : ''),
          idtipo: data.bimestres[2].mes[2].octubre[1].bimestral != null ? data.bimestres[2].mes[2].octubre[1].bimestral.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[2].mes[2].octubre[0].practicas != null ? data.bimestres[2].mes[2].octubre[0].practicas.nota : ''),
          idtipo: data.bimestres[2].mes[2].octubre[0].practicas != null ? data.bimestres[2].mes[2].octubre[0].practicas.tipo : ''
        })


      });


    }
  }

  controlescuartobimestre(data: NotasModel, id: number) {
    if (id == 0) {

      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[0].octubres[0].examenes != null ? data.bimestres[3].mes[0].octubres[0].examenes.nota : ''),
          idtipo: data.bimestres[3].mes[0].octubres[0].examenes != null ? data.bimestres[3].mes[0].octubres[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[0].octubres[1].practicas != null ? data.bimestres[3].mes[0].octubres[1].practicas.nota : ''),
          idtipo: data.bimestres[3].mes[0].octubres[1].practicas != null ? data.bimestres[3].mes[0].octubres[1].practicas.tipo : ''
        })


      });
    }
    if (id == 1) {
      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[1].noviembre[0].examenes != null ? data.bimestres[2].mes[1].noviembre[0].examenes.nota : ''),
          idtipo: data.bimestres[3].mes[1].noviembre[0].examenes != null ? data.bimestres[2].mes[1].noviembre[0].examenes.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[1].noviembre[1].practicas != null ? data.bimestres[2].mes[1].noviembre[1].practicas.nota : ''),
          idtipo: data.bimestres[3].mes[1].noviembre[1].practicas != null ? data.bimestres[2].mes[1].noviembre[1].practicas.tipo : ''
        })


      });

    }

    if (id == 2) {

      return this.builder.group({


        em: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[2].diciembre[1].bimestral != null ? data.bimestres[3].mes[2].diciembre[1].bimestral.nota : ''),
          idtipo: data.bimestres[3].mes[2].diciembre[1].bimestral != null ? data.bimestres[3].mes[2].diciembre[1].bimestral.tipo : ''
        }),
        pm: this.builder.group({
          nota: new FormControl(data.bimestres[3].mes[2].diciembre[0].practicas != null ? data.bimestres[3].mes[2].diciembre[0].practicas.nota : ''),
          idtipo: data.bimestres[3].mes[2].diciembre[0].practicas != null ? data.bimestres[3].mes[2].diciembre[0].practicas.tipo : ''
        })


      });


    }
  }
}
