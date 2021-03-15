import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {SesionesService} from '../../../../core/services/cursos/sesiones/sesiones.service';

@Component({
  selector: 'app-delete-sesion',
  templateUrl: './delete-sesion.component.html',
  styleUrls: ['./delete-sesion.component.css']
})
export class DeleteSesionComponent implements OnInit {

  idsesion;

  constructor(@Inject(MAT_DIALOG_DATA) public data,private sesionesService:SesionesService,public dialog:MatDialog) {
    this.idsesion=data.id;

  }

  ngOnInit(): void {
  }

  async eliminarSesion() {
    this.sesionesService.borrarSesion(this.idsesion).subscribe(value => {

      alert('sesion borrada con exito');
      this.dialog.closeAll();


    }, error => {

      alert('ups algo sucedio');

    });
  }
}
