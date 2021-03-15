import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {AsistenciaModel} from '../../../../../shared/models/AsistenciaModel';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AsistenciaService} from '../../../../../core/services/cursos/asistencia/asistencia.service';

@Component({
  selector: 'app-cursos-asistencia',
  templateUrl: './cursos-asistencia.component.html',
  styleUrls: ['./cursos-asistencia.component.css']
})
export class CursosAsistenciaComponent implements OnInit {

  displayedColumns: string[] = ['N0', 'alumno', 'asistencia'];
  dataSource: MatTableDataSource<AsistenciaModel>;


  dataGrouo: FormGroup=this.builder.group({

    students: this.builder.array([])

  });
  _id;
  selectedValue: any;

  constructor(public router: Router, private builder: FormBuilder, private asistenciaService: AsistenciaService) {

    this._id = this.router.getCurrentNavigation().extras.state.id;

    /*this._id = 2;*/


  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {


    this.cargarAsistencia();

  }

  cargarAsistencia(){
    (this.asistenciaService.asistencia(this._id)).subscribe(value => {
      this.dataSource = new MatTableDataSource<AsistenciaModel>(value);


      this.establecerFormulario();
    });

  }


  guardarAsistencia() {

    let lista:AsistenciaModel[] = this.dataGrouo.controls.students.value.map(value=>{

      const estudiante :AsistenciaModel={
        asistencia:value.asistencia,
        idStudent:value.id
      };

      return estudiante;

    });

    this.asistenciaService.guardarAsistencia(this._id,lista).subscribe(value => {
      console.log(value);
      this.cargarAsistencia();
    },error => {

      console.log(error);
    })

  }

  establecerFormulario() {

    const control = this.dataGrouo.get('students') as FormArray;
    this.dataSource.data.forEach(value => {

      control.push(this.establerFormularios(value));

    });

  }


  establerFormularios(students: AsistenciaModel) {


    return this.builder.group({

      id: [students.idStudent],
      asistencia: [students.asistencia == null ? '' : students.asistencia]

    });
  }

}
