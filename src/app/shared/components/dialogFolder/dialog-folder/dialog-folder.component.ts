import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {FolderService} from '../../../../core/services/cursos/folders/folder.service';

@Component({
  selector: 'app-dialog-folder',
  templateUrl: './dialog-folder.component.html',
  styleUrls: ['./dialog-folder.component.css']
})
export class DialogFolderComponent implements OnInit {

  _formGrupo: FormGroup = new FormGroup({

    nombrefolder: new FormControl('', control => {

      control.setValidators(Validators.required);

      return control;

    }),
    tipo: new FormControl('', control => {

      control.setValidators(Validators.required);

      return control;

    }),


  });

  idsesion;


  _tipoFolder: string[] = ['EXAMEN', 'TAREA', 'RECURSOS'];
  selectedValue: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data, private folderService: FolderService, public dialog: MatDialog) {
    this.idsesion = data.id;
  }

  ngOnInit(): void {
  }

  crearFolder() {

    console.log(this._formGrupo.controls);
    this.folderService.crearFolder({
      idsesion: this.idsesion,
      nombrefolder: this._formGrupo.controls.nombrefolder.value,
      tipofolder: this._formGrupo.controls.tipo.value
    }).subscribe(value => {


      alert("folder creado correctamente");

      this.dialog.closeAll();

    });

  }
}
