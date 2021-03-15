import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SesionesService} from '../../../../core/services/cursos/sesiones/sesiones.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  _formGrupo: FormGroup=new FormGroup({

    sesionname:new FormControl('',control => {

      control.setValidators(Validators.required);

      return control;

    })


  });
idcurso:number;

  constructor(@Inject(MAT_DIALOG_DATA) public data,private sesionesService:SesionesService,public dialog:MatDialog) {
    this.idcurso=data.id;

  }

  ngOnInit(): void {
  }

  crearSesion(){


     this.sesionesService.crearSesion({
      idcurso:this.idcurso,
      nombresesion:this._formGrupo.controls.sesionname.value
    }).subscribe(value => {
      console.log(value);
      alert("sesion creada correctamente")
       this.dialog.closeAll();


    },error => {
      console.log(error);
      alert("ups algo sucedio intentelo denuevo mas tarde")
       this.dialog.closeAll();

    });


  }

  agregarSesion(id){



  }
}
