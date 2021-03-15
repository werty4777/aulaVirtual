import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MaxSizeValidator} from '@angular-material-components/file-input';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {ArchivosService} from '../../../../core/services/cursos/archivos/archivos.service';

@Component({
  selector: 'app-dialog-file',
  templateUrl: './dialog-file.component.html',
  styleUrls: ['./dialog-file.component.css']
})
export class DialogFileComponent implements OnInit {
  idfolder:any;
  fileControl: FormControl;
  private _file;
  constructor(@Inject(MAT_DIALOG_DATA) public data,private servicio:ArchivosService,public dialog:MatDialog) {


    this.idfolder=data.id;

    this.fileControl = new FormControl(this._file, [
      Validators.required,
      MaxSizeValidator(5000 * 1024)
    ])

  }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((file: any) => {

        this._file = file;

    })
  }


  subirArchivo(name: string, desc: string){

    this.servicio.subirArchivo(this._file,name,desc,this.idfolder).subscribe(value => {


      alert("archivo subido con exito")
      this.dialog.closeAll();
    },error => {
      console.log(error);
    })

  }

  validate() {

    if(this.fileControl.hasError("maxSize")){

      alert("solo 5mb porfavor")
      this.fileControl.reset();

    }

  }
}
