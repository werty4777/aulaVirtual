import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ArchivosService} from '../../../../core/services/cursos/archivos/archivos.service';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.css']
})
export class DeleteFileComponent implements OnInit {



  idfile:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data,public dialog:MatDialog,private archivosService :ArchivosService) {

    this.idfile=data.id;

  }

  ngOnInit(): void {
  }


  borrarArchivo(){

    this.archivosService.borrarArchivo(this.idfile).subscribe(value => {

      alert("archivo borrado con exito");

      this.dialog.closeAll();

    },error => {

      alert("ups algo sucedio intentelo de nuevo mas tarde");

    })

  }

}
